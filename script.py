import os

#file_names = ['notes.txt', 'script.js', 'styles.css', 'index.html']
file_names = ['notes.txt', 'script.js']
f_name = input('Name of the folder: \n')

os.mkdir (f_name)



current_dir = os.getcwd()
print(current_dir)
n_dir = f'{current_dir}\{f_name}'
print(n_dir)

for i in file_names:
    try:
        open(os.path.join(n_dir, i), 'w').close()
    except OSError:
        print('Failed creating the file')
    else:
        print('File created')
        

