PATH ?= $(npm bin):$(PATH)
NODE ?= node
TEST ?= $(wildcard test/*.js)

test : $(addsuffix .test, $(basename $(TEST)))

%.test : %.js
	@$(NODE) $<

all : test
	@echo "Success, all tests passed."

.PHONY : test all %.test
