# Phonics with Spider-Man

## Introduction

Welcome to my first JavaScript project, Phonics with Spider-Man, an online, educational game intended to support young children starting to read to learn basic phonics (prescribed by the Read Write Inc. phonics scheme). It can be used by parents and teachers to engage beginner readers while young children may choose to access the game themselves once an adult has shown them how to do so.

The game, which is essentially a matching game whereby children match graphemes (letters) to phonemes (sounds), was designed around my 4-year old son's interests, namely superheroes and in particular the Spider-Man character. 

A live version of the website can be found here 

# Table of Contents <a name="table-of-contents"></a>

- [1. UX](#ux)

  - [1.1. Strategy](#strategy)
    - [Project Goals](#goals)
      - User Goals
      - User Expectation
  - [1.2 Structure](#structure)
  - [1.3 Skeleton](#skeleton)
  - [1.4 Surface](#surface)
  
- [2. Features](#features)

- [3. Technologies Used](#technologies)

- [4. Testing](#testing)

- [5. Development Cycle](#development)

- [6. Deployment](#deployment) 

- [7. End Product](#endproduct)

- [ 8. Known Bugs](#knownbugs)

- [9. Credits](#credits)


<a name="ux"></a>
## 1.UX

[Back to top](#table-of-contents)

This game was created to...

<a name="strategy"></a>
### 1.1 Strategy

[Back to top](#table-of-contents)
<a name="goals"></a>
#### Project Goals

The goal of the game is to...

#### User Goals:

- To encounter phonics in a fun, simplistic way
- To enjoy learning phonics
- To enable others to engage with learning phonics

<a name="expectations"></a>
#### User Expectations:

The content must:

- Offer mutlimedia rich content.
- Be child-friendly.
- Offer exposure to five basic graphemes and their corresponding phonemes.

<a name="structure"></a>
#### Structure

The game will feature a distinctive Spider-Man theme intended to enagage children who are fans of the movie franchise and/or animated series. 

It is crucial that the game is:

- Responsive on all devices sizes.
- Play sound and basic animations.
- Easy to play. 

<a name="skeleton"></a>
#### Skeleton

I generated designs for the website using wireframes in Balsamiq. 
<a name="wireframes"></a>
**Wire Frames**

![](https://share.balsamiq.com/c/sibaUJp6DERMeyUCwRAKru.png)
<a name="surface"></a>
#### Surface

The colour schemes used are intended to be generally consistent with the Spider-Man brand. Any other colours outside of the brand colours were chosen to for their bright and lively qualities.

A font known as 'Bangers' was selected for its comic-book style typography which complements the Spider-Man theme.

<a name="features"></a>
## 2. Features

[Back to top](#table-of-contents)

**Multimedia and Functionality**

- The icons on screen play audio clips when the user hovers over them.
- A spiderweb image displays a grapheme to children and when clicked, cycles randomly through a small selection of other graphemes.
- The colour-coded buttons are clickable and indicate the users' choices during the game.
- When the user correctly identifies a grapheme-phoneme correspondence, a point is scored for Spider-Man. An incorrect answer scores a point for Spider-Man's nemesis, Green Goblin.

**Sections:**

The single page design is comprised of several distinct sections:

**<u>Phoneme display</u>**

Below a brief sentence to introduce the objective of the game, the user will see a letter displayed within a spider's web. By clicking on the image, the user can randomly select another letter. 

**<u>Sound Icons (*)**</u>

Several brightly coloured 'play' icons define this section. When the user hovers over them, an animation enlarges them and audio recording is played of a particular phoneme.

**<u>Selection Buttons (*)</u>**

The buttons in this section are colour coded to correspond with the play icons in the previous section. By clicking on a button, the user makes a choice around which grapheme they can see. 

**<u>Score Area (*)</u>**

In this sections, images of the Spider-Man and Green Goblin characters are displayed above an HTML section which increments the score through JavaScript code. 

### 3. Technologies Used

[Back to top](#table-of-contents)

Technologies employed in the creation of the website are as follows:

- HTML5 
- CSS3
- JavaScript 
- Chrome Developer Tools (for debugging and testing)
- [Balsamiq](https://balsamiq.com/wireframes/?gclid=CjwKCAjwt8uGBhBAEiwAayu_9Re_SESOK5WbZcH6AhP1IRIE_hxODw8EmSBYSkPiRQ41fvAERHT38hoCClQQAvD_BwE) (for developing wireframes during the initial design process)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)
- [GitHub](https://github.com/) (project repository)
- [GitPod](https://gitpod.io) (code line interface)
- [Typora](https://typora.io/) (for creating this readme file)
- [W3C Validator tools](https://validator.w3.org/) (for validating code and error checking)
- [Am I Responsive?](http://ami.responsivedesign.is/) (for checking responsivity and screenshots of site functioning on different devices)

<a name="testing"></a>
### 4. Testing

[Back to top](#table-of-contents)

**Google Developer Tools**

During the process of coding the website, I used Google Developer Tools to view the affects of changes to the code. Occasionally, I would alter the CSS within Google Developer Tools to observe changes before deciding whether or not to incorporate these changes within the code in GitPod. 

**Responsivity and Mobile-first Approach**

To ensure mobile responsivity, I made extensive use of Google Developer Tool's 'responsive' options, viewing my site on a range of devices, including iPhone 5/6/7/X.

**W3C Validator Tools**






#### **Testing Process**

Generally, I followed a process of (1) writing the code for a specific feature, (2) testing it, and then (3) committing it to GitHub. 

The game was tested thoroughly for mobile and web responsivity.

  - On smaller screens, game icons shrink to fit the screen size.
  - The navigation bar directs users to the beginning of the distinct sections.
  - The navigation bar is 'sticky' meaning that it it stays visible at the top of the screen even as the user scrolls. This is to enable easy navigation of the page.
  - Users may return to the top of the page via a link reading 'back to top'. This features makes it easy for the user to navigate the page by eliminating the need for scrolling.
  - The navigation works as expected on both mobile and web.
- **Page sections - Expectation: Pass**
  - Each section of the page features consistent fonts, font sizes and colour schemes that are not only consistent with the company's branding, but also enable easy-reading of the text.
  - Different types of content, including videos and bar graphs, are featured in different sections to add variety of content throughout the page and also to reinforce the messaging conveyed by the page.
  - A range of background colours have been used to demarcate each section.
  - All sections display as expected on mobile and web.
- **Media - Expectation: Pass**
  - YouTube videos have been embedded within two of the sections.
  - CSS makes these videos responsive on different screen sizes.
  - All media functions correctly on mobile and web.
- **Footer - Expectation: Pass**
  - The social icons in the footer open in a new tab when clicked.
  - They display well on both mobile and web.
  - The footer sections functions correctly on mobile and web.
- **Button - Expectation: Pass**
  - The button opens a form in a new tab when clicked.
  - It functions correctly on mobile and web.
<a name="development"></a>
## 5. Development Cycle

[Back to top](#table-of-contents)

Having established a clear vision for the project as illustrated through wireframes, the development cycle was fairly linear without a great deal of deviation from the original plan. 

However, there were a few changes made during the development cycle which were not accounted for during the planning process.  The changes were made following discussions with other developers who offered constructive criticism of the site during its development. 

#### Form

- A form was added to replace the 'Get a Demo Button'
- The form presents one major advantage over the 'Get a Demo' button - it reduces the number of clicks needed before the user can access the form and avoids the need for opening new tabs.

#### Navigation

- Following discussion with my mentor, I implemented a sticky navigation to enhance the user experience.

#### Shadows

- To enhance the visual appearance, I added a box shadow effect at the bar graphs and boxes including the form.
<a name="deployment"></a>
## 6. Deployment

I deployed my project through GitHub. The process was as follows:

- From my repository, select 'Settings'.
- Select pages.
- Select 'Branch: master' under the 'Source' heading
- Select publish

## 7. End Product
<a name="endproduct"></a>

**Screenshot of game operating on various devices**




[Back to top](#table-of-contents)

The site may be viewed via this link:

## 8. Known Bugs
<a name="knownbugs"></a>

[Back to top](#table-of-contents)



## 9. Credits
<a name="credits"></a>
#### Code
- The angled div came from [Suman Biswas at Codepen](https://codepen.io/biswassuman/pen/NWGqKwd)
- The transparent text box over the hero image in mobile view came from [Rob Doyle Creative](https://robdoylecreative.com/how-to-add-a-transparent-text-box-over-an-image-using-css/)
- The bar graph in the 'Get Chosen' section came from [W3 Schools](https://www.w3schools.com/howto/howto_css_skill_bar.asp)
- The responsive navigation bar came from [W3 Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp)
- The responsive iframes came from [W3 Schools](https://www.w3schools.com/howto/howto_css_responsive_iframes.asp)
- The Demo button animation came from [W3 Schools](https://www.w3schools.com/howto/howto_css_zoom_hover.asp)
- Fonts came from [Google Fonts](https://fonts.google.com/)
- Icons in the footer came from [Font Awesome](https://fontawesome.com/)
- Code for hover effect on demo button came from [W3 Schools](https://www.w3schools.com/howto/howto_css_zoom_hover.asp)

#### Content

- Character images came from Marvel Comic's Spider-Man.
- Branding and colour scheme came from Marvel Comics.
- Audio clip of 'web shoot' sound came from Sam Birkinshaw via https://www.youtube.com/watch?v=hlLUa1-1SUk
- I recorded the phoneme sounds.
- The background image came from Adobe Stock.

[Back to top](#table-of-contents)