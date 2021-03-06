export function getMsgType(typeUrl: string): string {
  const typeRegister: Record<string, string> = {
    "/cosmos.bank.v1beta1.MsgSend": "cosmos-sdk/MsgSend",
    "/cosmos.bank.v1beta1.MsgMultiSend": "cosmos-sdk/MsgMultiSend",
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": "cosmos-sdk/MsgVerifyInvariant",
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": "cosmos-sdk/MsgSetWithdrawAddress",
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": "cosmos-sdk/MsgWithdrawDelegatorReward",
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorComission": "cosmos-sdk/MsgWithdrawValidatorComission",
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": "cosmos-sdk/MsgFundCommunityPool",
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": "cosmos-sdk/MsgSubmitEvidence",
    "/cosmos.gov.v1beta1.MsgSubmitProposal": "cosmos-sdk/MsgSubmitProposal",
    "/cosmos.gov.v1beta1.MsgVote": "cosmos-sdk/MsgVote",
    "/cosmos.gov.v1beta1.MsgDeposit": "cosmos-sdk/MsgDeposit",
    "/cosmos.slashing.v1beta1.MsgUnjail": "cosmos-sdk/MsgUnjail",
    "/cosmos.staking.v1beta1.MsgCreateValidator": "cosmos-sdk/MsgCreateValidator",
    "/cosmos.staking.v1beta1.MsgEditValidator": "cosmos-sdk/MsgEditValidator",
    "/cosmos.staking.v1beta1.MsgDelegate": "cosmos-sdk/MsgDelegate",
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": "cosmos-sdk/MsgBeginRedelegate",
    "/cosmos.staking.v1beta1.MsgUndelegate": "cosmos-sdk/MsgUndelegate",
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": "cosmos-sdk/MsgCreateVestingAccount",
  };
  const type = typeRegister[typeUrl];
  if (!type) {
    throw new Error("Type URL not known");
  }
  return type;
}
