git hub link: https://github.com/sharadvamsi/youtube_clone

project setup:
clone the repositotry using github link.
--to start server
open terminal type command "cd server".Now type command "npm install" to install dependencies.now type "npm start" to start server.
-- to run frontend
open terminal type command "cd client".Now type command "npm install" to install dependencies.now type "npm run dev" to start frontend.

Note: first run server then only frontend.else data will not be visible

functionality and usage:
-- when application started home page will be displayed where you can see list of videos of different channels.
-- you can search for any particular video based on title by searching in search bar.
-- you can filter by category also by clicking any categories shown below search bar.
-- you can hide and expand hamburger menu by clicking on it.
-- In small screens means which has width less than 768px you can see a avatar beside search bar. and above screen width of 768 you can see sign in button.
-- either if you click on avatar or sign in in any devices it redirects to sign in page where you can sign in using your email and passwords.
-- error messages are handled using toast in this page. if you dont have account in same page you click on sign up and redirected to signup page.
-- here after creating your account you redirected to sign in page to login using credtentials you have just registered with.
-- after successful sign in you will be redirected to home page now you can notice change in avatar beside search bar.
-- if you click on it you can see your information like username.
-- if you have channel your channel and view channel option will be visible. click on view channel to redirect to your channel page.
-- if you dont have channel you have option there with text create channel. click on that and submit your channel name in input field your channel will be created.
-- by default for new channel 5 video will be added.
--In your channel page you can banner image and details about your channel like no of subscribers,videos and also list of videos in your channel.
-- for every video in your channel page you have three dots where you edit title or description of particular video by clicking on three dots-->penicon.
-- if you want to delete that video click on three dots-->bin icon
-- in home page or in your channel page if you can on any video thumbnail you will be redirected to video details page.
-- where you can one side video player and video details bottom of it comments and right side related videos from same channel in larger devices.
-- in samll devices you can see everything in vertical only.
-- if you access this page after login you can see a input field add comment and button.you can type your comment and click on add comment button it will be displayed as last comment.
-- and in comments you can edit or delete your comment by clicking on three dots-->edit to edit comment and delete to delete.
-- for every remaining comments where other user posted you can see three dots but even though you click on it it doesnt show edit or delete because you are not authorized to delete others comment.
-- if you access this video detail page without siginin you cant see add comment section.

-- To redirect to home page you can click youtube logo or home icon in sidebar.

implementation---

-- tailwind css is used for responsiveness entire application is responsive.
-- In backend used mvc architecture and created separate routes models controllers for channel,video,users,comments.
-- mongodb atlas used for database and dont forgot to provide MONGO_URI in env file which is not present in this repository.
--redux is used in frontend for state management.
-- used youtube free api for videos data.

refer to the demo video you can get more idea about implementation.