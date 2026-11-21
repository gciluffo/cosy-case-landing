# Deploy steps

1. Uploads all files to s3 bucket
2. Go to cloud front. Create invalidation with /\*

## Update the digital bookshelf guide photos

Put the three images in `public/screenshots/` and update the numbered figures
in `src/pages/how-to-make-a-digital-bookshelf.tsx`:

1. Replace the physical-shelf placeholder with a photo of one shelf at home.
2. Replace the example scan screenshot with the results from scanning that photo.
3. Replace the example digital shelf screenshot with the finished version of the same shelf.

Update the alt text and remove the “Example” wording from the captions once
the images show the actual walkthrough.
