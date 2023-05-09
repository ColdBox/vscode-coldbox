# Installation

## VSCE

Make sure you have Node.js installed. Then run:

```bash
npm install -g vsce
```

## Usage

You can use vsce to easily package and publish your extensions:

```bash
cd myExtension
vsce package
vsce publish
```

vsce can also search, retrieve metadata, and unpublish extensions. For a reference on all the available vsce commands, `run vsce --help`.

## Get a Personal Access Token

First, make sure you have an Azure DevOps organization.

In the following examples, the organization's name is vscode. From your organization's home page (for example: https://dev.azure.com/vscode), open the User settings dropdown menu next to your profile image and select **Personal access tokens**

## Create a publisher

A publisher is an identity who can publish extensions to the Visual Studio Code Marketplace. Every extension needs to include a publisher name in its package.json file.

Once you have a Personal Access Token, you can create a new publisher using vsce:

```bash
vsce create-publisher (publisher name)
```

vsce will remember the provided Personal Access Token for future references to this publisher.

Note: Alternatively, create your publisher in the Marketplace publisher management page and log in through vsce, as described in the next section.
Log in to a publisher

If you already created a publisher before and want to use it with vsce:

```bash
vsce login (publisher name)
```

Similarly to the create-publisher command, vsce will ask you for the Personal Access Token and remember it for future commands.

You can also enter your Personal Access Token as you publish with an optional parameter `-p <token>`.

```bash
vsce publish -p <token>
```
