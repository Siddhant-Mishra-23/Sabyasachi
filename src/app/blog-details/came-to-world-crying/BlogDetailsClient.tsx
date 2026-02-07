"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

const BlogDetailsClient = () => {
    return (
        <section className="pt-[150px] pb-[120px]">
            <div className="container">
                <motion.div
                    className="-mx-4 flex flex-wrap justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <div className="w-full px-4 lg:w-8/12">
                        <motion.div variants={fadeInUp}>
                            <motion.h2
                                className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Came to the World Crying..
                            </motion.h2>

                            <motion.div
                                className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4"
                                variants={fadeInUp}
                            >
                                <div className="flex flex-wrap items-center">
                                    <div className="mr-10 mb-5 flex items-center">
                                        <div className="mr-4">
                                            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary/20">
                                                <Image
                                                    src="/images/blog/sabyasachi_blogpic.jpeg"
                                                    alt="Sabyasachi Mishra"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <span className="text-body-color mb-1 text-base font-medium">
                                                By <span>Sabyasachi Mishra</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-5 flex items-center gap-5">
                                        <p className="text-body-color flex items-center text-base font-medium">
                                            <span className="mr-3">📅</span>
                                            Oct 21, 2024
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <span className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white">
                                        Philosophy
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <div className="mb-10 w-full overflow-hidden rounded-lg relative aspect-video">
                                    <Image
                                        src="/images/blog/Project-03.jpg"
                                        alt="Came to the World Crying"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed space-y-6">
                                    <p className="italic font-semibold">
                                        I came to the world crying but I promise, would go out rejoicing !!
                                    </p>

                                    <p>
                                        “Kuan Kuan” was the first words / sounds that I came to the world with (And so does everyone). If you dissect this in Sanskrit, it’s a combination of two words “Kah” and “Aham” meaning “ Who Am I “.
                                    </p>
                                    <p>
                                        Irony of our lives is when we come to the world, we cry while people around us rejoice and while bidding goodbye, we go in peace while others cry.
                                    </p>
                                    <p>
                                        We take birth, experience wide variety of emotions from crying to being happy, being sad, being frustrated, being dejected to being neglected, being in peace and being in happy mode. But never did we realise that may be 8 out of 10 times we are not in a hoppy state of mind when we are grown up or may be we don’t take enough efforts to make ourselves happy.
                                    </p>
                                    <p className="font-bold text-dark">
                                        “Being Happy” is not a goal but a state of mind or a constant journey !!
                                    </p>
                                    <p>
                                        As famous author Robin Sharma says “The average 4-year-old laughs 300 times a day and adult 15 times”. We grow up and tend to laugh less, and when I reflected upon myself , soon realised how true was that.
                                    </p>
                                    <p>
                                        I have seen my son laughing out loud (really Loud :) ) when even watching a very average comedy show on television. When I tried doing the same, failed horribly, not once, not twice but multiple times. Somewhere have just forgotten the true meaning of “Laughing out loud “.
                                    </p>
                                    <p>
                                        On the other-side, I have always loved the energy of the senior citizen laughing club in my society which my father frequents when he is with us in Pune & the joy that he gets to be part of those morning rituals or evening gathering near a fountain corner. It’s those little dose of joy that makes his day meaningful.
                                    </p>
                                    <p>
                                        I get happy after buying a new phone,
                                        <br />
                                        I get happy after buying a new car
                                        <br />
                                        I get happy even after purchasing a new pair of clothes
                                        <br />
                                        But is that true happiness. ?
                                    </p>
                                    <p>
                                        When started to dig deep for the meanings of these words. Observed that actually I was using a wrong word..
                                    </p>
                                    <p>
                                        Now please read the same lines again
                                    </p>
                                    <p>
                                        I get pleasure after buying a new phone,
                                        <br />
                                        I get pleasure after buying a new car
                                        <br />
                                        I get pleasure even after purchasing a new pair of clothes
                                    </p>
                                    <p>
                                        And that’s when realised the difference between Pleasure & Happiness.
                                    </p>
                                    <p>
                                        While one is ephemeral , the other is permanent.
                                        <br />
                                        While for one, we forget the reason for that state soon after the acquisition, for the other you do not need a reason at all.
                                        <br />
                                        While one may mean to get an external validation of achievement, for the other, its more of an internal satisfaction.
                                    </p>
                                    <p>
                                        So, does that mean one should completely give up the materialistic acquisitions ? The answer in my opinion is ABSOLUTELY NO !!
                                    </p>
                                    <p>
                                        If that gives any individual a sense of peace, a sense of calmness and being happy , then why not ?
                                        <br />
                                        But if it is going to last only temporary and again pushing us to look out for the next dose, then possibly it’s time to reflect upon us.
                                    </p>
                                    <p>
                                        Soon the question started to haunt me as to how to cultivate this state of mind or the habit?
                                    </p>
                                    <p>
                                        Coincidentally was reading a nice book about the power of manifestation, and then thought to transform the theory into a practical implementation.
                                    </p>
                                    <p>
                                        What it simply says is; whatever one truly wishes to achieve, the best way to get to that point is to constantly think in the mind that you have already got that. For example, if one aspires to be wealthy, then the recommendation was to constantly voice it over saying that “I am rich” , “I am rich” and that, in an unconscious state of mind forces you to act on elements to get into that state where you start planning and accumulating wealth. Obviously the plan needs to result into actions, no doubting on that fact.
                                    </p>
                                    <p>
                                        Similarly, being happy is against a state of mind. In order to achieve that nirvana, the easiest method is to make our mind understand the same by being very explicitly vocal about being happy and stating that yes, I am happy & I will be happy in whatever circumstances comes my way, and in no time, I’ve seen that actually impacts a lot of your thinking process. This eventually enables one’s abilities to take the right direction in a diverse scenario.
                                    </p>
                                    <p>
                                        As they say, if your situation is not right, then by being in peace or being calm, will not result in the bad situation to vanish, but it will only enable you to handle that situation in a much stronger way.
                                    </p>
                                    <p>
                                        A classic way of achieving this state is again understanding the difference between two words, Getting Vs Giving.
                                    </p>
                                    <p>
                                        A very recent example of my own experience with this, is when me and my friends did a small get-together with a group of unprivileged children. It was a very small step and not to be boasting about in anyway. But those elements of interactions stayed with me for a long time as compared to any other materialistic acquisitions that I would have made to please myself in the past.
                                    </p>
                                    <p>
                                        Another classic real life example came from marine drive in Mumbai. Last year when was traveling for work, had gotten a chance to go there & spend some time. Was sitting there in tranquility with the hot tea in my hand & started to observe few people. I have always felt, marine drive being the best place to observe different state of emotions of people coming in from various strata of the society.
                                    </p>
                                    <p>
                                        A couple sitting with ice creams in their hands & watching the magical waves, a young kid running around with his parents with bites from the corn on the cob, a old uncle sipping tea and watching this kid and smiling, and many more of these.. But one thing was common in all these scenarios. Do not know if it was the majestic ocean or the starry night, or the sheer Mumbai passion to roam at midnight, but everyone in that rocky bay seems to be happy. This again brought me to realise that happiness is a state of mind and not a possessed property of individuals with ample wealth.
                                    </p>
                                    <p className="font-bold text-xl text-primary text-center mt-8">
                                        LAUGH MORE to BE HAPPY and LIVE MORE !!
                                    </p>
                                </div>

                                <div className="mt-10 pt-6 border-t border-body-color/10">
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center text-primary hover:underline font-medium"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Back to All Blogs
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogDetailsClient;
