import wikipedia
import json
import sys

def wiki_search(term):
    """reads json file, searches wikipedia for value in json, writes first
    sentence of the result to json file"""

    result = wikipedia.summary(term, sentences=3)  # first sentence of wikipedia summary
    out_dict = {"name":result}
    with open(term + "wiki_out.json", "w") as outfile:
        json.dump(out_dict, outfile)


if __name__ == "__main__":
    wiki_search(sys.argv[1])

