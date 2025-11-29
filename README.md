git add .
git commit -m "Initial structure and pages"        # if not already done
# then make some changes (add README, style files) and commit each logically:
git add src/
git commit -m "Add BrowseBooks, Home, BookDetails components"
git add src/redux/
git commit -m "Setup Redux store and books slice"
git add src/components/
git commit -m "Style components with Tailwind"
# create README
git add README.md
git commit -m "Add README with install & run instructions"
# remove node_modules if accidentally committed
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push origin main

