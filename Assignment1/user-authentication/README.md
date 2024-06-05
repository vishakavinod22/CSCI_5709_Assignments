# Assignment 1

Feature: User Authentication for EventAura, and event discovery platform
Tasks: 
    * User Sign Up
    * User Login
    * Forgot Password

* *Date Created*: 03 JUN 2024
* *Last Modification Date*: 05 JUN 2024
* *Assignment Repository URL*: <https://git.cs.dal.ca/vvinod/csci_5709_assignments>
* *Assignment 1 Git URL*: <https://git.cs.dal.ca/vvinod/csci_5709_assignments/-/tree/main/Assignment1/user-authentication?ref_type=heads>
* *Netlify Deployment URL*: <https://csci5709-vvinod-a1.netlify.app>

## Authors

* [Vishaka](vs235403@dal.ca)

## Deployment

* I created a folder called Assignment 1 withing the Assignments repository
* The code has also been deployed on netlify

## Built With

* [React](https://react.dev/learn/start-a-new-react-project) - The javascript front-end web framework used
* [Npm](https://docs.npmjs.com//) - The package manager used
* [Node](https://nodejs.org/docs/latest/api/) -  The javascript runtime environment used
* [Netlify](https://www.netlify.com) - The deployment tool used

## Sources Used

### Nabvbar.jsx

*Lines 12*
```
<img src={logo} alt="logo for EventAura" id="logo-img" />
```
The code uses the logo image created using [Canva](https://www.canva.com/design/DAGHBrzDjQA/7-KULDYOskRgdnATQDIR6g/edit?utm_content=DAGHBrzDjQA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton).

*Lines 15*
```
    <span><img src={hamburgerIcon} alt="hamburger icon" id="hamburger-icon"/></span>
```
The hamburger icon for the navbar when using smaller screens was downloaded from [FlatIcon](https://www.flaticon.com/authors/lizel-arina)
```<div> 
        Icons made by <a href="https://www.flaticon.com/authors/lizel-arina" title="Lizel Arina"> Lizel Arina 
        </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
    </div>
```

*Lines 8 - 33*
```<nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo for EventAura" id="logo-img" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span><img src={hamburgerIcon} alt="hamburger icon" id="hamburger-icon"/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link"> About Us </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/faqs" className="nav-link"> FAQs </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/contactus" className="nav-link"> Contact Us </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
```
The basic template code for Navbar was taken from [BootStrap Components](https://getbootstrap.com/docs/5.1/components/navbar/). The code taken is shown below. 
```
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```
The reason for this choice is that Bootstrap offers powerful and responsive component templates, making development faster and more efficient. I took the basic template and modified it to fit my application design.

### Login.jsx

*Lines 45 - 49*
```
    <div className="col-md-6">
        <div className="p-3 img-col">
            <img src={loginImg} alt="Event stall" id="login-img" />
        </div>
    </div>
```
The image was taken and modified from an existing [Canva Template](https://www.canva.com/templates/EAFweV1TAJ8-company-website-business-website-in-blue-white-black-2d-illustration-style/)

*Lines 81 - 82*
```
<div className="divider">
    <span className="divider-text">or</span>
</div>
```
#### ChatGPT prompt

"How to code a horizontal like with the words "or" written at the centre?"

#### ChatGPT response:

To create a horizontal line with the word "or" written at the center, you can use a combination of HTML and CSS. Here is a step-by-step guide to achieve this:
##### Step 1: HTML Structure
Create the HTML structure with a container for the horizontal line and a span for the text.
```html
<div className="divider">
  <span className="divider-text">or</span>
</div>
```
##### Step 2: CSS Styles
Add the following CSS to style the horizontal line and position the text in the center:
```css
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 20px 0;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ccc;
}
.divider-text {
  margin: 0 10px;
  color: #888;
}
```
##### Step 3: Combine HTML and CSS in a React Component
Here is how you can incorporate this into a React component:
```jsx
import React from 'react';
import './App.css'; // Assuming your CSS is in App.css
const Divider = () => {
  return (
    <div className="divider">
      <span className="divider-text">or</span>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <button>Login</button>
      <Divider />
      <button>Sign Up</button>
    </div>
  );
};
export default App;
```
##### CSS File (App.css)
```css
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 20px 0;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ccc;
}
.divider-text {
  margin: 0 10px;
  color: #888;
}
```
##### Explanation
- **HTML**:
    - The `div` with the class `divider` acts as a container for the line and the text.
    - The `span` with the class `divider-text` contains the text you want to display at the center of the line.
- **CSS**:
    - The `divider` class uses `flexbox` to align its children (`::before`, `::after`, and `span`) horizontally.
    - The `::before` and `::after` pseudo-elements create the horizontal lines on either side of the text.
    - The `divider-text` class adds margin to the text to separate it from the lines.
This setup ensures that the word "or" is centered between two horizontal lines.

### styles.css

*Lines 97 - 115*
```
.divider {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 5px 0;
}

.divider::before,
.divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
}

.divider-text {
    margin: 0 10px;
    color: #000;
}
```
#### ChatGPT prompt

Same as above

#### ChatGPT response

Same as above

The reason for using [ChapGPT](https://chat.openai.com/) to design the divider in the login form was that it needed a very minor design element. I was having difficulty placing the "or" in the center of the divider, so to save development time on this small detail, I used ChatGPT.

## Acknowledgments

* I appreciate the TA's as the React tutorials taught during lab sessions helped in developing my front-end.
* The UI and UX lectures taught in class inspired me to design an appealing UI for the login page.