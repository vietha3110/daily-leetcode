# // // A student is taking a cryptography class and has found anagrams to be very useful. Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

# // // The student decides on an encryption scheme that involves two large strings. The encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Determine this number.

# // // Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

def makeAnagram(a, b): 
    letters_wordA_count = get_count_letters(a)
    letters_wordB_count = get_count_letters(b)
    count_deleted_letters = 0
    for letter, count in letters_wordB_count.items(): 
        if (letter in letters_wordA_count): 
            count_deleted_letters += abs(count - letters_wordA_count[letter])
            del letters_wordA_count[letter]
        else:
            count_deleted_letters += count

    for count in letters_wordA_count.values():
        count_deleted_letters += count
    print(count_deleted_letters)
    return count_deleted_letters


def get_count_letters(str): 
    letters_count_dict = {} 
    for letter in str:
        if (letter in letters_count_dict): 
            letters_count_dict[letter] += 1
        else: 
            letters_count_dict[letter] = 1
    return letters_count_dict
makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
