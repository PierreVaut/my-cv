# my-cv

The project was to deliver a static React webpage that replaces my A4 resume.
- Easy to maintain: it's only React and CSS.
- Data-driven: all the content is in a unique folder.
- Easy to share: it's built and deployed to S3 in one command.

## Lambda-PDF-Generator

The S3 bucket that hosts this webapge is hooked to the (PDF Generator Lambda)[https://github.com/PierreVaut/pdf-generator-lambda].
Every changes on this project will trigger the PDF generator based on Puppeeter.
