# Threatened and Endangered Species on National Wildlife

# Project Overview:
## Objectives
Scraping data from the dataset sources to answer the questions
- Where are the largest population centers?
- What is the population density of the state?
- Is there a correlation between state population and endangered species?
- If there are more refuges are there less endangered species in that State?


## Dataset Sources
- [National Population Totals and Components of Change: 2010-2019](https://www.census.gov/data/tables/time-series/demo/popest/2010s-national-total.html)
- [Threatened and Endangered Species on
National Wildlife Refuges Database](https://www.fws.gov/refuges/databases/ThreatenedEndangeredSpecies/ThreatenedEndangered_Display.cfm)
- [List of states and territories of the United States by population density](https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States_by_population_density)


## Tools
- [Jupyter Notebook](https://jupyter.org/)
- [MongoDB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Javascript](https://www.javascript.com/)
- [jQuery](https://jquery.com/)
- [Geomap](https://www.geomap.com/)
- [leaflet](https://leafletjs.com/)
- [Python 3](https://www.python.org/download/releases/3.0/)

## Installation
1. [Install MongoDB & ensure it's running](https://docs.mongodb.com/manual/installation/)
2. Create and activate your preferred virtual environment (we used conda)
```bash
conda create --name myenv
conda activate myenv
```
3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Clean the population data, which outputs to `./data/cleanedPop_lat_Data.csv`
```bash
# Clean the population data with:
runipy ./data/cleaning/populationData.ipynb
```
5. Clean the Plants data, which outputs to  `./data/Endangered_Plants.csv` & `./data/Endangered_Birds.csv`
```bash
# Clean the birds and plants data with:
runipy ./data/cleaning/endangered_species.ipynb
```
6. Connect to the MongoDB, and populate the fields
```bash
# WARNING: MongoDB must be running in order for it to be populated
runipy ./data/database/CSV_to_MongoDB.ipynb
```

## Process
• Clean in Pandas, save to csv, and load in posgreSQL Sketch ideas A map with multiple layers Population centers/density (heat map) Location of endangered species Number of endangered animals Number of endangered plants Graph comparison: Number of National Wildlife Refuge per state Number of endangered species per state

## Roadblocks

## Conclusion
