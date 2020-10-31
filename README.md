# Threatened and Endangered Species on National Wildlife

## Objectives

Scraping data from the dataset sources to answer the questions

• Where are the largest population centers?

• What is the population density of the state?

• Is there a correlation between state population and endangered species?

• If there are more refuges are there less endangered species in that State?



## Dataset Sources 


• https://www.census.gov/data/tables/time-series/demo/popest/2010s-national-total.html

• https://www.fws.gov/refuges/databases/ThreatenedEndangeredSpecies/ThreatenedEndangered_Display.cfm

• https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States_by_population_density


## Tools


• Jupyter Notebook

• MangoDB

• Bootstrap

• Javascript

• Geomap

## Process

• Clean in Pandas, save to csv, and load in posgreSQL Sketch ideas A map with multiple layers Population centers/density (heat map) Location of endangered species Number of endangered animals Number of endangered plants Graph comparison: Number of National Wildlife Refuge per state Number of endangered species per state

## Roadblocks

### Insufficient Coordinate data

We have multiple species in an area but only assigned one coordinate pair per state. This grouped all the icons together. When doing a group cluster, then all the icons pushed to the state bounds and some went over the state bounds.

### GitHub repository management

We had a lot of issues with branches getting merge conflicts. In retrospect, the best practice is to have a branch for a specific element of the project and not a branch for each contributor.

### Folder Structure

Our folder structure was not well defined and clean prior to establishing the base code files. This caused similar folders in to be created in different parts of the tree It was difficult to reference files in code blocks and find the correct file that was being referenced. Restructuring folders mid-stream involves having to find all dependent files instances and direct to the new location.


## Conclusion 

• 
