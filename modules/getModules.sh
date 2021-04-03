#!/bin/sh

# Get the MMM-Block module
rm -rf MMM-Block/*
rm -rf MMM-Block/.[^.]*
git clone https://github.com/BKeyport/MMM-Block

# Get the MMM-BurnIn module
rm -rf MMM-BurnIn/*
rm -rf MMM-BurnIn/.[^.]*
git clone https://github.com/werthdavid/MMM-BurnIn

# Get the MMM-network-signal module
rm -rf MMM-network-signal/*
rm -rf MMM-network-signal/.[^.]*
git clone https://github.com/PoOwAa/MMM-network-signal
cd MMM-network-signal
npm install
cd ..
