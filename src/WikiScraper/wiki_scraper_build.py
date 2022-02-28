import wikipedia
import json
import os


wiki_terms = ["major_scale", "interval_music", "semitone", "major_second"]
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




# import json
# # from music_wiki import *

# wiki_terms = ["major scale", "interval (music)", "semitone", "major second"]

# searchTerms = {}
# print(searchTerms)

# for x in range(len(wiki_terms)):
#     out_dict = {"name": wiki_terms[x]}
#     with open("music.json", "w") as outfile:
#         json.dump(out_dict, outfile)
#     outfile.close()

#     # wiki_search() 

#     with open("music.json", "r") as infile:
#         music_dict = json.load(infile)
#     searchTerms[wiki_terms[x]] = music_dict.get("name")

# print(searchTerms)
# # out_file_image = open("./searchTerms.json", "w")
# # out_file_image.write(str(searchTerms))
# # out_file_image.close()

# with open("src/searchTerms.json", "w") as outfile:
#     json.dump(searchTerms, outfile, indent = 6)

# out_file = open("src/searchTerms.json", "w")
# json.dump(searchTerms, out_file, indent = 6)  
# out_file.close()
