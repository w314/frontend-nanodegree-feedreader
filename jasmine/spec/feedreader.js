/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('all feed has URL defined, with URL not being empty', () => {
            let allUrlGood = true;
            allFeeds.forEach(feed => { 
                //chek if feed has url property
                if(!Object.keys(feed).includes('url')) {
                    allUrlGood = false;
                }
                //check if url is not empty
                if(!feed.url) {
                    allUrlGood = false;
                }

                });
            expect(allUrlGood).toBe(true);
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all feed has name defined, with name not being empty', () => {
            let allNameGood = true;
            allFeeds.forEach(feed => { 
                //chek if feed has name property
                if(!Object.keys(feed).includes('name')) {
                    allNameGood = false;
                }
                //check if name is not empty
                if(!feed.name) {
                    allNameGood = false;
                }
                });
            expect(allNameGood).toBe(true);
         });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {
        //make sure, DOM is loaded before running any tests
        beforeEach( (done) => {
            const interval = setInterval( () => {
                if(document.readyState == 'complete') {
                    clearInterval(interval);
                    done();
                }
            }, 100);
        });

        function menuHidden() {
            //return true if menu is hidden
            return document.body.classList.contains('menu-hidden');            
        }

        //function clicks on the menu icon
        function clickMenu() {
            const menuIcon = document.getElementsByClassName('menu-icon-link')[0];
            menuIcon.click();            
        }
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu element is hidden by default', () => {
            expect(menuHidden()).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu changes visibility when menu icon is clicked', () => {
            let menuChangesVisibility = true;
            //get visibility of menu before testing
            const originallyHidden = menuHidden();
            //click on menu icon
            clickMenu();
            //if menu was originally hidden and is still hidden OR
            //if menu was visible and is still visible make menuChangesVisibilty variable false
            if((originallyHidden && menuHidden()) || (!originallyHidden && !menuHidden)) {
                menuChangesVisibility = false;
            }
            //click on menu icon again to see if it reverses the visibility
            clickMenu();
            //if visiblity is not back to its original state set menuChangesVisibility to false
            if(!(menuHidden() == originallyHidden)){
                menuChangesVisibility = false;
            }                
            expect(menuChangesVisibility).toBe(true);
          });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('loadFeed loads properly', () => {

         });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
