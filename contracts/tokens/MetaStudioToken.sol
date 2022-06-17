// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/interfaces/IERC165Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/interfaces/IERC777Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/interfaces/IERC1820ImplementerUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC777/ERC777Upgradeable.sol";
import "../metatx/ERC2771ContextUpgradeable.sol";
import "../metatx/IERC2771Upgradeable.sol";

/// @title The Metastudio's ERC777/ERC20 token
/// @custom:security-contact it@theblockchainxdev.com:
contract MetaStudioToken is
  IERC165Upgradeable,
  Initializable,
  ReentrancyGuardUpgradeable,
  OwnableUpgradeable,
  PausableUpgradeable,
  ERC20PermitUpgradeable,
  ERC20VotesUpgradeable,
  ERC777Upgradeable,
  IERC1820ImplementerUpgradeable,
  ERC2771ContextUpgradeable,
  UUPSUpgradeable
{
  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
    _disableInitializers();
  }

  /// @notice Contract initialisation. 5_000_000_000 tokens are minted
  /// @dev Constructor replacement methods used for Proxified Contract
  /// @param tokensOwner initianally minted Token's owner address
  /// @param forwarder Initial ERC2771 trusted forwarder
  /// @param defaultOperators_ Array of default operators for ERC777
  function initialize(
    address tokensOwner,
    address forwarder,
    address[] memory defaultOperators_
  ) external initializer {
    require(tokensOwner != address(0), "tokensOwner is mandatory");
    // @defaultOperators_ : the list of default operators. These accounts are operators for all token holders, even if authorizeOperator was never called on them
    __ERC777_init("MetaStudioToken", "SMV", defaultOperators_);
    __Ownable_init();
    __ReentrancyGuard_init();
    __ERC2771_init(forwarder);
    __Pausable_init();
    __ERC20Permit_init("MetaStudioToken");
    __ERC20Votes_init();
    __UUPSUpgradeable_init();

    _mint(tokensOwner, 5_000_000_000 * 10**decimals());
  }

  /// @notice Supported interface ask machine. Implemented interface are `IERC 165`, `IERC 20`, `IERC 777`, `IERC 2771`, `IERC 1820`
  /// @dev ERC 165 implementation
  /// @param interfaceId interface's id
  /// @return Returns true if the specified interface is implemented by the contract
  function supportsInterface(bytes4 interfaceId)
    external
    pure
    override
    returns (bool)
  {
    return
      interfaceId == type(IERC165Upgradeable).interfaceId ||
      interfaceId == type(IERC20Upgradeable).interfaceId ||
      interfaceId == type(IERC20PermitUpgradeable).interfaceId ||
      interfaceId == type(IERC777Upgradeable).interfaceId ||
      interfaceId == type(IERC2771Upgradeable).interfaceId ||
      interfaceId == type(IERC1820ImplementerUpgradeable).interfaceId;
  }

  /*
   * Inheritance extensions
   */

  /// @notice Pause the contract aka `Emergency Stop Mechanism`. No action available on it except `unpause`
  /// @dev Only owner can pause
  function pause() external onlyOwner {
    _pause();
  }

  /// @notice Unpause the contract.
  /// @dev Only owner can pause
  function unpause() external onlyOwner {
    _unpause();
  }

  // @dev https://soliditydeveloper.com/erc-777
  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override whenNotPaused nonReentrant {
    super._beforeTokenTransfer(from, to, amount);
  }

  // @dev https://soliditydeveloper.com/erc-777
  function _beforeTokenTransfer(
    address operator,
    address from,
    address to,
    uint256 amount
  ) internal override whenNotPaused nonReentrant {
    super._beforeTokenTransfer(operator, from, to, amount);
  }

  function _authorizeUpgrade(address newImplementation)
    internal
    override
    onlyOwner
  // solhint-disable-next-line no-empty-blocks
  {

  }

  function _afterTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override(ERC20Upgradeable, ERC20VotesUpgradeable) {
    super._afterTokenTransfer(from, to, amount);
  }

  /// @dev Using ERC777 secured implementation
  function _mint(address to, uint256 amount)
    internal
    override(ERC20Upgradeable, ERC20VotesUpgradeable)
  {
    _mint(to, amount, "", "");
  }

  /// @dev Using ERC777 secured implementation
  function _burn(address account, uint256 amount)
    internal
    override(ERC20Upgradeable, ERC20VotesUpgradeable)
  {
    _burn(account, amount, "", "");
  }

  /// @inheritdoc IERC1820ImplementerUpgradeable
  function canImplementInterfaceForAddress(
    bytes32 interfaceHash,
    address account
  ) external view override returns (bytes32) {
    if (
      account == address(this) &&
      (interfaceHash == keccak256("ERC777Token") ||
        interfaceHash == keccak256("ERC20Token"))
    ) {
      return "ERC1820_ACCEPT_MAGIC";
    }
    return "";
  }

  /*
   ERC777 overrided methodes-----
   */

  /// @inheritdoc ERC777Upgradeable
  function approve(address spender, uint256 value)
    public
    override(ERC20Upgradeable, ERC777Upgradeable)
    returns (bool)
  {
    return super.approve(spender, value);
  }

  function _approve(
    address holder,
    address spender,
    uint256 value
  ) internal override(ERC20Upgradeable, ERC777Upgradeable) {
    super._approve(holder, spender, value);
  }

  function _spendAllowance(
    address _owner,
    address spender,
    uint256 amount
  ) internal override(ERC20Upgradeable, ERC777Upgradeable) {
    super._spendAllowance(_owner, spender, amount);
  }

  /// @inheritdoc ERC777Upgradeable
  function allowance(address holder, address spender)
    public
    view
    override(ERC20Upgradeable, ERC777Upgradeable)
    returns (uint256)
  {
    return super.allowance(holder, spender);
  }

  /// @inheritdoc ERC777Upgradeable
  function balanceOf(address tokenHolder)
    public
    view
    override(ERC20Upgradeable, ERC777Upgradeable)
    returns (uint256)
  {
    return super.balanceOf(tokenHolder);
  }

  /// @inheritdoc ERC777Upgradeable
  function decimals()
    public
    pure
    override(ERC20Upgradeable, ERC777Upgradeable)
    returns (uint8)
  {
    return 18;
  }

  /// @inheritdoc ERC20Upgradeable
  function name()
    public
    view
    override(ERC20Upgradeable, ERC777Upgradeable)
    returns (string memory)
  {
    return super.name();
  }

  /// @inheritdoc ERC20Upgradeable
  function symbol()
    public
    view
    override(ERC20Upgradeable, ERC777Upgradeable)
    returns (string memory)
  {
    return super.symbol();
  }

  /// @inheritdoc ERC777Upgradeable
  function totalSupply()
    public
    view
    override(ERC20Upgradeable, ERC777Upgradeable)
    returns (uint256)
  {
    return super.totalSupply();
  }

  /// @inheritdoc ERC777Upgradeable
  function transfer(address recipient, uint256 amount)
    public
    override(ERC20Upgradeable, ERC777Upgradeable)
    returns (bool)
  {
    return super.transfer(recipient, amount);
  }

  /// @inheritdoc ERC777Upgradeable
  function transferFrom(
    address holder,
    address recipient,
    uint256 amount
  ) public override(ERC20Upgradeable, ERC777Upgradeable) returns (bool) {
    return super.transferFrom(holder, recipient, amount);
  }

  /*
    Extended ERC2771
  */

  /// @notice Allows Contract's owner to change the trusted forwarder
  /// @dev should be declared here because we need to protect calls with onlyOwner
  /// @param forwarder New tructed forwarder's address
  function setTrustedForwarder(address forwarder) external onlyOwner {
    super._setTrustedForwarder(forwarder);
  }

  function _msgSender()
    internal
    view
    virtual
    override(ContextUpgradeable, ERC2771ContextUpgradeable)
    returns (address sender)
  {
    return super._msgSender();
  }

  function _msgData()
    internal
    view
    virtual
    override(ContextUpgradeable, ERC2771ContextUpgradeable)
    returns (bytes calldata)
  {
    return super._msgData();
  }
}
