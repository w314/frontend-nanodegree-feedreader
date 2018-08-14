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
    /* This test suite is about the RSS feeds definitions,
    * the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
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


        /* This test loops through each feed
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


    /* Test suite testing the menu */
    describe('The menu', () => {

        function menuHidden() {
            //return true if menu is hidden
            return document.body.classList.contains('menu-hidden');
        }

        //function clicks on the menu icon
        function clickMenu() {
            const menuIcon = document.getElementsByClassName('menu-icon-link')[0];
            menuIcon.click();
        }

        /* This test ensures the menu element is
         * hidden by default.
         */
         it('menu element is hidden by default', () => {
            expect(menuHidden()).toBe(true);
         });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu changes visibility when menu icon is clicked', () => {
            //get visibility of menu before testing
            const originallyHidden = menuHidden();
            //click on menu icon
            clickMenu();
            //expect visibility to change
            expect(originallyHidden).not.toBe(menuHidden());

            //click on menu icon again
            clickMenu();
            //expect visibility to change back to its original state
            expect(originallyHidden).toBe(menuHidden());
          });

    });


    /* This test ensures that when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    describe('Initial Entries', () => {

      // calling loadFeed before running the test
      beforeEach( (done) => {
        loadFeed(0, () => {
          //signaling that loading feed has finished
          done();
        });
      });

      //To test if the feed has at least one entry, I select the first entry
      //and expect it not to be null
      it('loadFeed loads properly', () => {
        let entries = document.querySelector('div.feed .entry-link .entry');
        expect(entries).not.toBe(null);
      });

   });

    /* This test ensures that when a new feed is loaded
     * by the loadFeed function that the content actually changes.
    */
    describe('New Feed Selection', () => {

     //define variables to store feed content for the feed1 and feed2
     let content1, content2;

     /* before running the test loading feed1 and storing its first entry
     * after loading feed1 loading feed2 and storing the first entry
     */
     beforeEach( (done) => {
       loadFeed(0, () => {
         //storing content of feed1
         content1 = document.querySelector('div.feed .entry-link').innerHTML;
         //loading feed2 in feed1's callback to make sure it starts
         //after feed1's load has finished
         loadFeed(1, () => {
           //storing content of feed2
           content2 = document.querySelector('div.feed .entry-link').innerHTML;
           //signaling the finish of loading both feeds
           done();
         });
       });
     });

       //checking if the contents of the two feeds differ
       it('feed contect changes with when new feed is selected', () => {
         expect(content1).not.toEqual(content2);
       });

     });

    }());
