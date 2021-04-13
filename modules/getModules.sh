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
git clone https://github.com/zbattenfield/MMM-network-signal
cd MMM-network-signal
npm install
cd ..

# Get the MMM-Carousel module
rm -rf MMM-Carousel/*
rm -rf MMM-Carousel/.[^.]*
git clone https://github.com/barnabycolby/MMM-Carousel

# Get the DailyXKCD module
rm -rf DailyXKCD/*
rm -rf DailyXKCD/.[^.]*
git clone https://github.com/Blastitt/DailyXKCD

# Get the MMM-DailyPokemon module
rm -rf MMM-DailyPokemon/*
rm -rf MMM-DailyPokemon/.[^.]*
git clone https://github.com/NolanKingdon/MMM-DailyPokemon
cd MMM-DailyPokemon
npm install
cd ..