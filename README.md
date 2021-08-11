# Phonics with Spider-Man

## Introduction

Welcome to my first JavaScript project, Phonics with Spider-Man, an online, educational game intended to support young children starting to read to learn basic phonics (prescribed by the Read Write Inc. phonics scheme). It can be used by parents and teachers to engage beginner readers while young children may choose to access the game themselves once an adult has shown them how to do so.

The game, which is essentially a matching game whereby children match graphemes (letters) to phonemes (sounds), was designed around my 4-year old son's interests, namely superheroes and in particular the Spider-Man character. 

A live version of the website can be found [here ](https://paulmodaley.github.io/spidermanphonics/).

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

This game was created to enhance children's experience of learning to read in the Early Years of school.

<a name="strategy"></a>
### 1.1 Strategy

[Back to top](#table-of-contents)
<a name="goals"></a>
#### Project Goals

The goal of the game is to correctly match phonemes with graphemes. A point is awarded to Spider-Man for every correct answer while a point is awarded to Green Goblin for incorrect player answers. Once either the computer (Green Goblin) or Spider-Man (human player) reach 10 points a winner is declared and the game restarts.

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

![](https://share.balsamiq.com/c/unJWiPc6rzHdaskT2zWtXn.png)
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
- [JSHint](https://jshint.com/) (for checking JavaScript code for errors)

<a name="testing"></a>
### 4. Testing

[Back to top](#table-of-contents)

**Google Developer Tools**

During the process of coding the website, I used Google Developer Tools to view the affects of changes to the code. Occasionally, I would alter the CSS within Google Developer Tools to observe changes before deciding whether or not to incorporate these changes within the code in GitPod. 

**Responsivity and Mobile-first Approach**

To ensure mobile responsivity, I made extensive use of Google Developer Tool's 'responsive' options, viewing my site on a range of devices, including iPhone 5/6/7/X.

**W3C Validator Tools**

The validator indicated that there are no errors within my HTML and CSS.

**JS Hint**

JavaScript code was periodically checked for errors using JS Hint. 

#### **Testing Process**

Generally, I followed a process of (1) writing the code for a specific feature, (2) testing it, and then (3) committing it to GitHub. 

The game was tested thoroughly for mobile and web responsivity.

### Home Page
| Function | Description | Result:Mobile | Result:Desktop |
| --- | --- | --- | --- |
| Background image | Adds visual appeal.| Passed | Passed |
| Text with Transparent Background | Adds visual appeal and offers an introduction to the game.| Passed | Passed |
| Game button | Links to game page that when clicked will redirect to game.html page | Passed | Passed |
| Feedback link| Link to feedback form page that when clicked will redirect to form.html page | Passed | Passed |


[Back to Table of Contents](#table-of-contents)

### Game Page
| Function | Description | Result:Mobile | Result:Desktop |
| --- | --- | --- | --- |
| Letter display | Displays a letter/grapheme at random when the user clicks on the image. | Passed | Passed |
| Sound icons | Plays a phoneme sound when the user hovers over an icon. | Passed | Passed |
| Select buttons | Each button corresponds with an sound icons. The button expands on hover and when clicked indicates the user's selection by triggering a function to validate the answer against the letter displayed. Clicking to select an answer also triggers a sound effect. | Passed | Passed |
| Score Area | Both user and computer score start at 0. A correct answer increments Spider-Man's (user) score by 1 while an incorrect answers increment's Green Goblin's (computer) score. A tie round does not reflect on the score board. | Passed | Passed |
| Game Result display | When either player, human or computer, reaches 10 wins a function is triggered to indicate who won and then the page is reloaded and the scores return to 0. | Passed | Passed |
| Back button |Text at the top left of the screen acts as a back button to return the user to the home page.  | Passed | Passed |

[Back to Table of Contents](#table-of-contents)

### Feedback Form Page
| Function | Description | Result:Mobile | Result:Desktop |
| --- | --- | --- | --- |
| Back button | Text at the top left of the screen acts as a back button to return the user to the home page. | Passed | Passed |
| Feedback form | The form has sections for first name, surname, email, telephone number, organisation and feedback.  All fields are required before the form can be submitted via the submit button below the form. | Passed | Passed |

<a name="development"></a>
## 5. Development Cycle

[Back to top](#table-of-contents)

Having established a clear vision for the project as illustrated through wireframes, the development cycle was fairly linear without a great deal of deviation from the original plan. 

However, there were a few changes made during the development cycle which were not accounted for during the planning process.  The changes were made following discussions with other developers who offered constructive criticism of the site during its development. 

#### Form

- A form was added to a page as a means of capturing user feedback.

#### Navigation

- Following discussion with my mentor, I implemented a welcome page and feedback form page.

#### Animations

- To enhance the visual appearance, I added hover animations to buttons and icons.
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

![Home Screen](/workspace/spidermanphonics/assets/images/homescreen.png)
![Game Screen](/workspace/spidermanphonics/assets/images/gamescreen.png)
![Form Screen](assets/images/formscreen.png)



[Back to top](#table-of-contents)

The site may be viewed via this link: https://paulmodaley.github.io/spidermanphonics/

## 8. Known Bugs
<a name="knownbugs"></a>

[Back to top](#table-of-contents)



## 9. Credits
<a name="credits"></a>
#### Code
- The JavaScript code to display a random image from an array came from https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10
- The JavaScript code to set a delay came from [Stack Overflow] https://stackoverflow.com/questions/24400845/refreshing-a-page-after-certain-delay-in-jquery
- The Demo button animation came from [W3 Schools](https://www.w3schools.com/howto/howto_css_zoom_hover.asp)
- Fonts came from [Google Fonts](https://fonts.google.com/)
- Icons in the footer came from [Font Awesome](https://fontawesome.com/)
- Code for hover effect on demo button came from [W3 Schools](https://www.w3schools.com/howto/howto_css_zoom_hover.asp)

#### Content

- Character images came from Marvel Comic's Spider-Man.
- Branding and colour scheme came from Marvel Comics.
- Audio clip of 'web shoot' sound came from Sam Birkinshaw via https://www.youtube.com/watch?v=hlLUa1-1SUk
- I recorded the phoneme sounds.
- Background images came from [WallPaper Access] https://wallpaperaccess.com/spider-man

[Back to top](#table-of-contents)
