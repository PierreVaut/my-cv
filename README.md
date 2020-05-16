# my-cv

The aim of this project is to deliver a static React webpage containing my A4 resume.
- Easy to maintain: it's only React and CSS.
- Data-driven: all the content is in a unique folder.
- Easy to share: it's built and deployed to S3 in one command. Each new deployment triggers a PDF generation on the fly!

## PDF generation

PDF generation is done automatically by an AWS Lambda running an headless Puppeeter: (PDF Generator Lambda)[https://github.com/PierreVaut/pdf-generator-lambda].

