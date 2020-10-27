from splinter import Browser
from bs4 import BeautifulSoup as bs
import time


def init_browser():
    # @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {'executable_path': 'static/chromedriver'}
    return Browser('chrome', **executable_path, headless=False)


def scrape_info():
    browser = init_browser()

    # Visit visitcostarica.herokuapp.com
    url = 'https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States_by_population_density'
    browser.visit(url)

    time.sleep(5)

    # Scrape page into Soup
    html = browser.html
    soup = bs(html, 'html.parser')
    

    state_data = []
    my_xpath = '/html/body/div[3]/div[3]/div[5]/div[1]/table[1]/tbody'
    state_divs = browser.find_by_xpath(my_xpath)

    state_soup = bs(state_divs.html, 'html.parser')


    
    
    for state in state_soup:
        
        
        state_name = browser.find_by_tag('title').text
        # state_rank = browser.find_by_xpath(state_total_cases_xpath).text
        # state_new_cases = browser.find_by_xpath(state_new_cases_xpath).text
        
        pop_data = {
            'State_Name' : state_name,
            # 'Rank' : state_total_cases,
            # 'Population_density' : state_new_cases
                     }
        
        print(pop_data)
        state_data.append(pop_data)
    
    browser.quit()

    return pop_data

state_data = scrape_info()

print(state_data)