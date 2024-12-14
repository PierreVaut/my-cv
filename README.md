# Online Resume

I was too lazy to do my resume on word, so I did this React webpage instead!

- Easy to maintain: it's only React and CSS 🌈
- Data-driven: all the content in one folder
- Easy to share: it's deployed to S3 and PDF generation is done on the fly!

Save a tree, don't print it 🌲

http://randomwebsite.xyz.s3-website-us-east-1.amazonaws.com/#/pierre-vautherin-cv-2025

## PDF generation

PDF generation is done by an AWS Lambda 👩‍🏭

[PDF Generator Lambda](https://github.com/PierreVaut/pdf-generator-lambda).

## Tech stack (2025 update)

This project was started in 2020, before Typescript became the industry standard.
If I had plenty of time, I would definitely migrate it on Typescript !
Typing the 'resources' file would offer better consistency.

It uses React 18. Removing CRA and migrating to React 19 would be definitely nice to have!

The state is managed using React Context, which IMHO is perfectly enough to manage the static data.
This choice was documented in the [ADR 003 "single source of truth"](https://github.com/PierreVaut/my-cv/blob/master/docs/adrs/0003-single-source-of-truth.md).

UI relies on CSS, which is still OK in 2025 for a static web page.
We will need to check if it scales well



