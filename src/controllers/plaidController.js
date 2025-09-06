/**
 * Create Plaid Link token (mock)
 */
export const createLinkToken = async (req, res) => {
  res.json({ link_token: "dummy_link_token" });
};

/**
 * Exchange public token (mock)
 */
export const exchangePublicToken = async (req, res) => {
  res.json({ message: "Bank account connected successfully (mock)" });
};
