# SP.AI Gadget
## Adds Scooty Puff Pricing to Evepraisal

### Description

This little bit of JavaScript and HTML adds Scooty Puff pricing to Evepraisal at the click of a bookmark.  Works in Firefox, Chrome, and (surprisingly) the IGB.  If ships are included in the list, you can switch to packaged ship sizes if desired by clicking the button next to the table.

### Usage

To use the gadget, create a new bookmark by right-clicking your bookmark bar and selecting "Add Page..." in Chrome, or "New Bookmark" in Firefox.  Use whatever you'd like for the name, and copy-paste the following JS code into the URL or Location:

```
javascript:(function(){$.get("https://rawgit.com/lbr88/spaigadget/master/spaitable.html",function(t){$("#result_container").append(t);});})();
```

Use Evepraisal as normal: paste in your items and click submit. Once the results load, click on the bookmark you made.  A table will be added below the evepraisal results with pricing for SP.AI, including no-collateral, and with-collateral amounts for all three routes.  You can click on any of the pricing amounts to highlight them for easy copy-pasting.

It also adds bayback prices from SP.AI and a custom percentage buyback calculator for convenience.

### Questions

If you have any questions or suggestions you can convo or mail *Darvin Gack* in game.

### Screenshot

![screenshot](http://i.imgur.com/vljDYbI.png)
![screenshot](http://i.imgur.com/bnajYoC.png)
