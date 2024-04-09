# DEPLOYMENT SCRIPTS
forge script MarketplaceScript -s "deployMarketplaceTestnet()" --broadcast

forge script MarketplaceScript -s "deployAdLandTestnet(address)" $ADLAND_MARKETPLACE --broadcast --verify —-verifier blockscout

# VERIFICATION SCRIPTS

# NOTE: set ETHERSCAN_API_KEY in .env
forge verify-contract --watch 0x0c69a122a52fE786D71aD83E2316E86c8b7D564D src/CommonAdSpaces.sol:CommonAdSpaces --chain-id 11155420                