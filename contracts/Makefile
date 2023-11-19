test:
	@fe test src/main.fe

CODE:=$(shell cat output/Main/Main.bin)
RPC_URL="https://sepolia-rpc.scroll.io"

deploy:
	@echo "deploying contract..."
	@fe build src/main.fe --overwrite
	@cast send --legacy --rpc-url $(RPC_URL) --private-key $(PRIVKEY) --create $(CODE)

