commit_msg=$1

git add .

git commit -m  "$commit_msg"

echo "\n start add and commit message: $commit_msg  \n"

git push origin master

echo "\n successful to push to origin master \n"