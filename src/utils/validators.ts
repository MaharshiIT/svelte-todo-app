type ValidatorsItemType = {
  pattern: string;
  error: Function;
};

type ValidatorsType = {
  [key: string]: ValidatorsItemType;
};
const validators: ValidatorsType = {
  required: {
    pattern: ".*\\S+.*",
    error: (text?: string) => `Please enter ${text || "something"}`,
  },
};

export default validators;
