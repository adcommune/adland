# NOTE: set ETHERSCAN_API_KEY in .env
# DEPLOYMENT SCRIPTS
forge script MarketplaceScript -s "deployMarketplaceTestnet()" --broadcast

forge script MarketplaceScript -s "deployAdLandTestnet(address)" $MARKETPLACE --broadcast --verify

# VERIFICATION SCRIPTS

forge verify-contract --watch $MARKETPLACE src/CommonAdSpaces.sol:CommonAdSpaces --chain-id 11155420