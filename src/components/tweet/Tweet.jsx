import { TwitterTimelineEmbed } from "react-twitter-embed";

const Tweet = () => {
  return (
    <section className="tweet__container">
            <TwitterTimelineEmbed
              onLoad={function noRefCheck() {}}
              options={{
                height: 500,
                width: 350,
              }}
              screenName="GLVOficialMxic1"
              sourceType="profile"
            />
    </section>
  );
};
export default Tweet;
