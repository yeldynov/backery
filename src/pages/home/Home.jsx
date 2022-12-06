import HistoryImg from '../../assets/history.png';
import HistoryNewImg from '../../assets/history-new.png';
import TeamImg from '../../assets/team.png';
import Work1Png from '../../assets/work-1.png';
import Work2Png from '../../assets/work-2.png';
import FreeTime from '../../assets/free-time.png';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='title'>About Us</div>
      <div className='yellow-container'>
        <div className='item'>
          <div className='row'>
            <div className='subtitle'>History</div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='item-text'>
                A long, long time ago, in a small town in Hertfordshire, there
                lived a baker who was very, very greedy. He sold yummy breads
                and sweet pastries, but he also knew every trick in the book
                when it came to cheating customers out of their money. Every
                night he would sit at his little kitchen table and count how
                much money he had made that day, cackling gleefully.
                <br />
                <br />
                The baker had a daughter with blue eyes and dark hair who helped
                him in the shop, and she was just as rotten as her father. One
                day, when she was working alone, an old woman came into the
                shop.
                <br />
                <br />
                “Please, my dear,” the small old lady said, “would you be so
                kind and give me a bit of your dough? I haven’t eaten for three
                days and I don’t have two farthings to rub together.”
                <br />
                <br />
                The girl was very reluctant to give anyone anything for free,
                but the old lady wouldn’t go away and she thought it would be
                bad for business if there was a beggar in the shop for too long.
                Finally, she agreed and gave the woman a teeny tiny bit of
                dough, just to get rid of her. She had no patience for it.
                <br />
                <br />
                The old woman took the piece of dough, but then she asked for
                the girl’s attention again.
                <br />
                <br />
                “Please, my dear girl, I hate to be a bother, but would you be
                so kind as to bake this tiny bit of dough you gave me in your
                oven? You see, I don’t have an oven, and I’m so terribly
                hungry.”
              </div>
              <div className='item-image'>
                <img src={HistoryImg} alt='' />
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
        <div className='item'>
          <div className='row'>
            <div className='subtitle'>New History</div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='item-image'>
                <img src={HistoryNewImg} alt='' />
              </div>
              <div className='item-text'>
                “Fine,” the girl snapped, “give it to me.” She took the tiny bit
                of dough and put it in the oven. The old woman sat down,
                happily, and waited.
                <br />
                <br />
                After a while, the baker’s daughter went to check on the dough,
                expecting to see the world's teeniest, tiniest loaf of bread.
                But how could it be? The tiny piece of dough had turned into a
                huge loaf of bread!
                <br />
                <br />
                The greedy girl couldn’t believe her luck. Quickly, she took the
                bread out of the oven and hid it in a basket right next to her.
                Then she turned to the old woman.
                <br />
                <br />
                “I couldn’t find your bread in the oven, it must have fallen
                through the slats and into the flames!”
                <br />
                <br />
                “Oh dear,” the old lady said, “could you please try once more,
                love? I can wait a little longer.” The baker’s daughter didn’t
                know what else to do, so she took another little bit of dough,
                even tinier than before, and put it in the oven while the old
                woman waited. But when the girl looked in the oven again, she
                discovered another loaf that was even larger and prettier than
                the first.
                <br />
                <br />
                “Oh, you wouldn’t believe this,” she called out to the old
                woman. “The dough must have fallen into the flames again. It’s
                gone!” And she hid the second loaf in the basket as well.
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
      <div className='white-container'>
        <div className='item'>
          <div className='row'>
            <div className='subtitle'>Team</div>
          </div>
          <div className='row'>
            <img src={TeamImg} width='100%' alt='' />
          </div>
          <div className='row'>
            <div className='item-text-wide'>
              “Well, my dear, maybe the third time will be lucky. Can we try one
              last time? I beg you. I’m starving!” <br /> This time, the girl
              used a piece of dough so tiny it was almost invisible. She put it
              in the hot oven, and once again it turned into a gorgeous loaf of
              bread.
              <br />
              <br />
              This time, however, the old woman had stood up so she could have a
              good view of the kitchen, and when she saw the girl trying to hide
              the loaf in the basket, she shouted: “Hey! That’s my bread!”
              <br />
              <br />
              The baker’s daughter protested, but of course the old woman knew
              about all three of the loaves the selfish girl had stolen for
              herself. What the girl didn’t know, you see, was that this was no
              ordinary old woman. This was a fairy in disguise! She’d hoped that
              the girl would begin to be kind, but instead she’d watched over
              and over as the girl tried to steal the bread for herself.
              <br />
              <br />
              Angry, the fairy decided to punish the girl for her greediness.
              She took her magic wand out of her cloak and quickly tapped the
              girl’s back three times. And, just like that, the baker’s daughter
              turned into an owl. The bird flapped around the bakery for a
              moment, then flew outside through the open door, and no one since
              has ever seen the baker’s daughter again. Unless they’re up late
              at night and hear a ‘Hoot! Hoot! Hoot!’ It’s the baker’s daughter,
              saying she’s sorry.
            </div>
          </div>
        </div>
        <div className='around'>
          <div className='line' />
        </div>
      </div>
      <div className='yellow-container'>
        <div className='item'>
          <div className='row'>
            <div className='subtitle'>Work</div>
          </div>
          <div className='row'>
            <img src={Work1Png} width='100%' alt='' />
          </div>
          <div className='row'>
            <div className='item-text-wide'>
              “Oh dear,” the old lady said, “could you please try once more,
              love? I can wait a little longer.” The baker’s daughter didn’t
              know what else to do, so she took another little bit of dough,
              even tinier than before, and put it in the oven while the old
              woman waited. But when the girl looked in the oven again, she
              discovered another loaf that was even larger and prettier than the
              first.
              <br />
              <br /> After a while, the baker’s daughter went to check on the
              dough, expecting to see the world's teeniest, tiniest loaf of
              bread. But how could it be? The tiny piece of dough had turned
              into a huge loaf of bread!
            </div>
          </div>
          <div className='row'>
            <img src={Work2Png} width='100%' alt='' />
          </div>
          <div className='row'>
            <div className='item-text-wide'>
              This time, however, the old woman had stood up so she could have a
              good view of the kitchen, and when she saw the girl trying to hide
              the loaf in the basket, she shouted: “Hey! That’s my bread!”
            </div>
          </div>
          <div className='row'>
            <div className='around'>
              <div className='line' />
            </div>
          </div>
        </div>
      </div>
      <div className='white-container'>
        <div className='item'>
          <div className='row'>
            <div className='subtitle'>Free Time</div>
          </div>
          <div className='row'>
            <img src={FreeTime} width='100%' alt='' />
          </div>
          <div className='row'>
            <div className='item-text-wide'>
              The old woman took the piece of dough, but then she asked for the
              girl’s attention again.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
