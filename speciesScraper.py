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
    print(soup.prettify())

    state_data = []
   
    
    state_soup = bs(state_data.html, 'html.parser')
    
    for state in state_soup:
        
        # state_total_cases_xpath = f'/html/body/div/div[1]/main/div[2]/div/div[8]/div[1]/div/div[{state + 1}]/div[2]/div[1]/div[2]/div/div/div[2]'
        # state_new_cases_xpath = f'/html/body/div/div[1]/main/div[2]/div/div[8]/div[1]/div/div[{state + 1}]/div[2]/div[1]/div[2]/div/div/div[3]/div[1]/span[2]'
        
        # state_name_xpath = f'/html/body/div/div[1]/main/div[2]/div/div[8]/div[1]/div/div[{state + 1}]/div[1]/h3/a'
        
        state_name = browser.find_by_href("wikitable sortable mw-collapsible jquery-tablesorter mw-made-collapsible").text
        state_total_cases = browser.find_by_xpath(state_total_cases_xpath).text
        state_new_cases = browser.find_by_xpath(state_new_cases_xpath).text
        
        state_data = {
            'name' : state_name,
            'total_cases' : state_total_cases,
            'new_cases' : state_new_cases
                     }
        
        print(state_data)
        covid_data.append(state_data)
    
    browser.quit()

    return state_data

state_data = scrape_info()

print(state_data)