# Birthday MTG

## Requirements

### Users
- Each user has a unique selection of card pools based on their date of birth
- Each card pool is associated with a year
- Card pools remain static per birthdate
- New pool is available on your birthday

### Card Pools
- 45 randomly selected cards
- Vintage legal
- Not on the reserved list
- Not named "Plains," "Island," "Swamp," "Mountain," or "Forest"
- At least one legendary creature
- Reprints are treated as separate cards
- Pools for future years can include new vintage legal cards

### Networking & Deployment
- Card information can be pulled from Scryfall
- App contains rudimentary database of every card possible to select
- App is static and can be served in entirety to the client
- Hosted on Github Pages

### Code
- React & Node - built for browsers

## Building

Tools you need: `node` and `npm`

To create a dev build and start the test server:

`npm run start`

To create a production build:

`npm run build`
