const express = require('express')
const app = express()
const PORT = 8000;

//4th - create json object with info
let mainCharacters = {
    'sam': {
        'name': 'Sam Winchester',
        'nickname': ['Sam (by Everyone)', 'Sammy, Bitch (by Dean)', 'Moose (by Crowley)'],
        'species': 'Human (special child), Ghost (formerly), Rabid (cured)',
        'gender': 'Male',
        'occupation': 'Hunter, Former undergraduate and law school applicant, Witch-in-training (taught by Rowena)',
        'quotes': ["I’ve got demon blood in me, Dean. This disease is pumping through my veins, and I can’t ever rip it out or scrub it clean. I’m a whole new level of freak! And I’m just trying to take this — this curse… and make something good out of it. Because I have to.", "Getting my ass kicked by those Juggalos was therapeutic.", "You mind doing a little bit of thinking with your upstairs brain, Dean?", "We are a family. I’d do anything for you. But things will never be the way they were before.", "Dude, you were hallucinating sheep on the road.", "If you know evil’s out there, how can you not believe good’s out there too?", "People don’t just disappear, Dean. Other people just stop looking for them.", "I’m not gonna live this life forever. Dean, when this is all over, you’re gonna have to let me go my own way.", "The internet is more than just naked people. You do know that?", "No drinking, no gambling, no premarital sex. Dean, they basically just outlawed 90 percent of your personality.", "You and me — we’re all that’s left. So, if we’re gonna see this through, we’re gonna do it together.", "I’m ready to die. And I’m ready to watch people I love die. But I’m not ready to be your bitch.", "You’re a hypocrite, Dean. How did you feel when Dad sold his soul for you? ‘Cause I was there. I remember. You were twisted and broken. And now you go and do the same thing… to me. What you did was selfish.", "You’re changing the world, and I want to be a part of it.", "Some people are just born tortured. So when they die, their spirits are just as dark.", "'Insane' is kinda what we do.", "Guess that’s why we all hold onto life so hard… even the dead. We’re all just scared of the unknown.", "There’s a lot of folklore about mirrors — that they reveal all your lies, all your secrets, that they’re a true reflection of your soul, which is why it’s bad luck to break them.","Rebel a little bit… in a healthy, non-satanic way.", "You know, Sammy is a chubby 12-year-old. It’s Sam, OK?"],
    },
    'dean': {
        'name': 'Dean Winchester',
        'nickname': ['Jerk (by Sam)', 'Squirrel (by Crowley)', 'Deano (by Gabriel)', 'Batman (by Himself)'],
        'species': 'Human, Vampire (cured), Knight of Hell (cured), Jefferson Starship (cured), Ghost (formerly)',
        'gender': 'Male',
        'occupation': 'Hunter',
        'quotes': ["My name is Dean Winchester. I’m an Aquarius. I enjoy sunsets, long walks on the beach, and frisky women. And I did not kill anyone.", "House rules, Sammy. Driver picks the music, shotgun shuts his cakehole.", "What’s done is done. All that matters now, all that’s ever mattered, is that we’re together. So shut up and drink your beer.", "Maybe we should know what we’re walking into before we actually walk into it.", "Killing things that need killing is kind of our job. Last I checked, taking pleasure in that is not a crime.", "Why is it my job to save these people? Why do I have to be some kind of hero?", "We going to fight or make out, ’cause I’m getting some real mixed signals here.", "Details are everything! You don’t want to go fighting ghosts without any health insurance.", "Boy, three bedrooms, two baths, and one homicide. This place is gonna sell like hotcakes.", "You’re gonna wipe out a whole town for one little witch. Sounds to me like you’re compensating for something.", "The universe is trying to tell us something we both should already know. We’re stronger together than apart.", "I hate these indie films. Nothing ever happens.", "I think the world’s gonna end bloody. But it doesn’t mean we shouldn’t fight. We do have choices. I choose to go down swingin’.", "Always knew I’d find the source of all evil at a vegan bakery.", "Well, call it personal experience. Nobody gets that angry unless they’re talking about their own family.", "A wise man once told me, ‘Family don’t end in blood.’ But it doesn’t start there either. Family cares about you, not what you can do for them. Family’s there; for the good, bad, all of it. They got your back, even when it hurts. That’s family. That sound like your mother?", "Wow, you get a trophy in Stockholm Syndrome.", "I’m not looking at you like anything. Though I gotta say, you do look like crap.", "I mean, accidents just don’t happen accidentally.", "I’m sitting in a laundromat, reading about myself, sitting in a laundromat, reading about myself. My head hurts.", "C’mon, we hunt monsters! What the hell? I mean, normal people, they see a monster and they run. But not us, no no no, we… we search out things that want to kill us! Yeah, huh? Or eat us! You know who does that? Crazy people!", "What we do, you can’t learn this crap in a book. You put on a flannel, you pick up a gun, you go out there. Either you get good fast, or you get dead faster.", "You can take your peace and shove it up your lily-white ass. ‘Cause I’ll take the pain, and the guilt. I’ll even take Sam as is. It’s a lot better than bein’ some Stepford bitch in paradise! This is simple, Cas!", "You’re the same thing, only bigger. The same brand of cockroach I’ve been squashing my whole life. An ugly, evil, belly-to-the-ground supernatural piece of crap. The only difference between them and you is the size of your ego.", "Don’t be afraid of the dark? What, are you kidding me? Of course, you should be afraid of the dark! You know what’s out there!"],
    },
    'castiel': {
        'name': 'Castiel',
        'nickname': 'Cas, Clarence, Unicorn (by Meg), Feathers (by Crowley)',
        'species': 'Angel',
        'gender': 'Male',
        'occupation': '',
        'quotes': ["I killed two angels this week. My brothers. I’m hunted. I rebelled, and I did it — all of it — for you. And you failed. You and your brother destroyed the world. And I lost everything for nothing. So keep your opinions to yourself.", "I’ll interrogate the cat.", "Every soul here is a monster. This is where they come to prey upon each other for all eternity.", "I’m the one who gripped you tight and raised you from perdition.", "I found a liquor store… and I drank it.", "This is a vessel. My true form is approximately the size of your Chrysler building.", "Don’t make things needlessly complicated as you humans tend to do.", "If you murder a monster in monster heaven, where does it go?", "Hey, ass-butt!", "A hunter’s memorial, complete with monster. Mary would’ve appreciated that.", "I’m hapless. I’m hopeless. I mean, why the hell not bury myself in women and decadence? Right? It’s the end, baby! That’s what decadence is for. Why not bang a few gongs before the lights go out?", "I learned that from the pizza man.", "I don’t understand that reference."],
    },
    'unknown': {
        'name': 'unknown',
        'nickname': 'unknown',
        'species': 'unknown',
        'gender': 'unknown',
        'occupation': 'unknown',
        'quotes': 'unknown',
    },
}

//first - event handler that listens for request and sends html file to render on browser
app.get('/', (request, response) => {
    response.sendFile(__dirname + ('/index.html'))
})

//3rd - event handler to send json when request is sent from a ping to the api page
app.get('/api/:name', (request, response) => { //added param to url
    const charName = request.params.name.toLowerCase() //can put in a param to be a placeholder for whatever want to search for in url
    if (mainCharacters[charName]) {
        response.json(mainCharacters[charName]);
    } else {
        console.log(mainCharacters['unknown'])
        // response.json(mainCharacters['unknown'])
    }
})

//did 2nd - added a port to listen to server
app.listen(process.env.PORT || PORT, () => { //tells to use whatever heroku is using as server or ours
    console.log(`The server is now running on port ${PORT}.`)
})  