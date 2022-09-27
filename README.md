# Dev-Job-Board

A place for developers to show recruiters that they are available for hire. Feel free to contribute and improve this in any way you see fit.

Link to the webpage: [**JOB Board**](https://dev-job-board-now.vercel.app).

### How to run the project in your local machine

- `git clone https://github.com/Irakarama-Laurent123/DevJobBoard.git`

- `npm install`

- `npm start`

### How to add your name to the list

Note: **You will first need to make a fork of the project!**

![fork image](https://docs.github.com/assets/cb-23088/images/help/repository/fork_button.png)

If you are unclear on how the GitHub workflow works, you can check the [Make a Pull Request guide](https://makeapullrequest.com/).

---

To add your DATA to the list `Submission.json`
inside `Submissions/` folder, with following content.
(**Don't include the square brackets "[ ]" or angle brackets "< >" !!! They
are just there to indicate an example placeholder.**)

```json
{
  "name": "[YOUR_FULL_NAME]",
  "img": "[YOUR_IMG_URL]",
  "email": "[YOUR_EMAIL_ADDRESS]",
  "website": "[YOUR_WEBSITE_URL]",
  "linkedin": "https://www.linkedin.com/in/<YOUR_LINKEDIN_USERNAME>",
  "github": "https://github.com/<YOUR_GH_USERNAME>",
  "jobTitle": "[YOUR_TITLE]",
  "location": "[  YOUR_LOCATION]"
}
```

### Please note!

- Profile pictures and/or images\* are allowed.
- If you do not want to fill some of the fields, leave them blank (e.g. `state: "",`).
- Your pull request will only be accepted if it follows the example above. It **cannot** have anything else.

Please submit a Pull Request to be added to this list. If you are unsure how to do this, please check out _Contributing To Open Source_ video

- How to add profile image to your JobBoard profile using Github avatars.

1. Go to your profile on GitHub.com
2. Append to your GitHub profile url “.png”, so it will look like this:

https://github.com/Irakarama-Laurent123.png

3. Hit enter and the browser will generate a page with your image, it look like this:
   https://avatars.githubusercontent.com/u/96382900?v=4

4. Copy url of this page and paste it in `Submissions/<YOUR_GH_USERNAME>.json` file
