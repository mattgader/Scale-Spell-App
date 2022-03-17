import json
import os

wiki_terms = ["major_scale", "interval_music", "semitone", 
              "major_second", "accidental_music", "pitch_music"]
searchTerms = {}

for x in range(len(wiki_terms)):
    term = wiki_terms[x]
    system_string = 'python src/WikiScraper/music_wiki.py ' + term
    os.system(system_string)
    with open(term + "wiki_out.json", "r") as infile:
        music_dict = json.load(infile)
        searchTerms[wiki_terms[x]] = music_dict.get("name")

with open("src/searchTerms.json", "w") as outfile:
    json.dump(searchTerms, outfile, indent = 6)
