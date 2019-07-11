// Description:
//   ▄︻̷̿┻̿═━一 When life at the office is sad, grab a nerf gun and start a war ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot nerf - Hubot initiate a Nerf Battle Countdown
//   hubot shoot - Hubot initiate a Nerf Battle Countdown
//   hubot gun - Hubot initiate a Nerf Battle Countdown
//   hubot war - Hubot initiate a Nerf Battle Countdown
//
// Author:
//   seza443
//
// Sources:
//  https://github.com/seza443/hubot-nerf-countdown

const INITIAL_COUNTER = 5;
const PRE_FIGHT_TIMER = 5000;
const TIMER = 1000;

const START_FIGHT = [
  "You should get ready for this...",
  "Brace yourselves",
  "Get ready!",
  "Grab a gun...",
  "What is the meaning of life ? Just kidding, get your gun ready",
];

// https://textfac.es/
const GUNS = [
  "▄︻̷̿┻̿═━一",
  "̿̿ ̿̿ ̿̿ ̿'̿'\\̵͇̿̿\\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿",
  "̿'̿'\\̵͇̿̿\\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿",
  "̿ ̿ ̿'̿'\\̵͇̿̿\\з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿",
  "⌐╦╦═─",
  "━╤デ╦︻(▀̿̿Ĺ̯̿̿▀̿ ̿)",

];

const FIGHT_MSG = [
  "SHOOT",
  "FIGHT",
  "TAKE COVER",
  "RUN FOR YOUR LIFE",
  "GRENAAAAAADE",
  "ENNEMY INCOMING",
  "POINT & CLICK",
];

/**
 * Send a message with the counter value, then recursive call with counter--
 * When counter is 0, send a GUNS message
 *
 * @param robot
 * @param msg
 * @param counter
 */
function nerfCountdown(robot, msg, counter) {
  if (counter > 0) {
    msg.send('' + counter);
    setTimeout(
      function () {
        nerfCountdown(robot, msg, counter - 1);
      }, TIMER);
  } else {
    msg.send(msg.random(FIGHT_MSG));
    msg.send(msg.random(GUNS));
  }
}

module.exports = function (robot) {

  robot.respond(/(nerf)|(gun)|(war)|(shoot)$/i, function (msg) {
    msg.send(msg.random(START_FIGHT));
    setTimeout(function () {
      nerfCountdown(robot, msg, INITIAL_COUNTER);
    }, PRE_FIGHT_TIMER);
  });
};
