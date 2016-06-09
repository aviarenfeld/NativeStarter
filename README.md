# NativeStarter
React Native starter 

**Getting started with a new React Native project**

NodeJS 4.0 or greater is required for React Native. The default Homebrew package for Node is currently 6.0.
Use Homebrew to install Node.js
brew install node

The React Native command line tools allow you to easily create and initialize projects, etc.
npm install -g react-native-cli

Xcode 7.0 or higher. Open the App Store or go to https://developer.apple.com/xcode/downloads/. This will also install git as well.

Watchman is a tool by Facebook for watching changes in the filesystem. It is recommended you install it for better performance.
brew install watchman

To create a new React Native project
react-native init NewNativeProject
cd NewNativeProject
You can then either run react-native run-ios from the command line OR 
open the .xcodeproj file from the project and hit play, then run npm start in the project root.

Build your App.

**Tags to review**

##View
The most fundamental component for building UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls, and is designed to be nested inside other views and to have 0 to many children of any type. View maps directly to the native view equivalent on whatever platform React is running on, whether that is a UIView, <div>, android.view, etc. 

##Image##
React Native provides a unified way of managing images in your iOS and Android apps. 

##TouchableHighlight##
A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view. The underlay comes from adding a view to the view hierarchy, which can sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color.


