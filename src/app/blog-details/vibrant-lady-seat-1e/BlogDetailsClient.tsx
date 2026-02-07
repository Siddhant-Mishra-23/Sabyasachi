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
                                The Vibrant Lady in Seat 1E
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
                                            Oct 18, 2024
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <span className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white">
                                        Life Lessons
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <div className="mb-10 w-full overflow-hidden rounded-lg relative aspect-video">
                                    <Image
                                        src="/images/blog/Project-01.png"
                                        alt="The Vibrant Lady in Seat 1E"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed space-y-6">
                                    <p>
                                        We all travel for work but sometimes the travel becomes much more interesting and sometimes enlightening and those are, your aha moment in those boring short travels..
                                    </p>
                                    <p>
                                        A Similar moment happened to me while I was traveling for work on my flight from Pune to Chennai last week, After boarding the flight and settled, Soon, I was off to my phone for playing a movie. Generally, I’m not a frequent goer to the theater for watching movies and hence thought to utilize this 1.5 hrs to complete one. So here I was, putting my headset on, watching the movie and then a suddenly I observe that a very bright, vibrant lady sitting on the next seat. It's not the first look love but something was there which made me notice her again and then immediately when the flight completed the boarding and my Windows seat was vacant, I was just about to get up and move, coincidentally at the same time the lady says “hello if you don't mind can you move to the window seat” as she wanted to place her handbag as the seat was empty. It reminded me that, the BAGWATI moment of the movie “zindagi na milegi dobara” was not only in reel life but in real too. needless to say this bag was cute as well.
                                    </p>
                                    <p>
                                        I was back on my movie. After a while when the snacks was served and I pounced on it as if it was the last meal of my life and I was the last leaf of the food chain, & when I was trying to place the trash I had a 5 second of fumbling in terms of the placement of the trash and then lady gently take out the the tray on the middle seat and says, or rather points with her eyes “why don't you use this ?”
                                    </p>
                                    <p>
                                        Me thanking her, started thinking how such minute observation the lady had about my activities and when I went to the washroom immediately after that, my Inner voice kept roaring in my ears “U got to speak to this lady” otherwise normally don’t indulge in great conversation (which am not proud of myself :( ). I don't know why but as I was awed with simplicity and the small gestures, I had to talk.
                                    </p>
                                    <p>
                                        So breaking the ice, I say “hi, are you travelling for work” and thinking that we will just have a decent common conversation was unaware for a surprise. Not only she said yes, but when I asked further ”if you don't mind sharing what do you do” and the lady in very polite and humble manner says She was in the board of 8 organisations and was heading for a board meeting that time as well....
                                    </p>
                                    <p>
                                        Pinching myself I Say to myself, “ Go on Sabya, keep Listening” . In her 37+ years of corporate innings not only she was a Banker but also held multiple directorial posts in many private and public banks, She was also that chairman and managing director of one of the esteemed public sector bank in India too. And then when I Started talking the very little that I know about BFSI industry & how Tech Mahindra had also evaluated to be one of the payment banks sometime back, I was sweetly surprised/excited, when she told that she was on the panel, thru RBI, who was selecting the “Payments banks” that time.
                                    </p>
                                    <p>
                                        She was <strong>@Shubhalakshmi Panse</strong> !!
                                    </p>
                                    <p>
                                        I knew I was up for a great conversation being on cloud nine (which literally I was as well) for the next one hour and rightfully so, we spoke about, varied topics from Millennial, to banks, to the new evolved Indian economy etc etc.
                                    </p>
                                    <p>
                                        While feeling dump that how come I dnt know such as esteemed personality being part of the same industry as well, I Couldn’t hold my curiosity much more and had to ask “ma'am if you don't mind can I have your email id and I would love to connect with you” which she obliged me with.
                                    </p>
                                    <p>
                                        And by now we were already almost 45 minutes on to the conversation and the pilot started to announce the landing from which forced me to think what an idiot I was, to keep quiet and watch that useless movie for half an hour where I could have learnt so much from this small travel.
                                    </p>
                                    <p>
                                        While getting down took a selfie with her and finally headed to to the belt number 4 to pick up my baggage..
                                    </p>
                                    <p>
                                        If you all thought the story was over, Nahhh, there was more to it..
                                    </p>
                                    <p>
                                        Once I was in the cab to the hotel, I started to Google her out. Hurriedly while searching her out in the LinkedIn, before I could send a note along with the invitation, it had already gone out, perhaps because my fingers were shaky and were walking ahead of my mind. Feeling shit about that and spending another 15 minutes to figure out if I can recall that and send another one with a good note but I was unsuccessful..
                                    </p>
                                    <p>
                                        She hit another sixer in the last ball of the over while the next morning when I got up, not only to see her accepting the invite but accepting with her long note mentioning about the conversation that we had on the flight..
                                    </p>
                                    <p>
                                        And by then the definition of HUMBLENESS, SIMPLICITY & BEING GROUNDED ON EARTH were all clear in my mind and I went ahead on that bright day and had a fantastic meeting that was planned..
                                    </p>
                                    <p className="font-semibold italic">
                                        Thank you ma'am @Shubhalakshmi Panse for the teaching “Falanti vrukshaah sada Namanti” (Translation :: Fruit bearing trees laden with fruits bow down with their weight and benefit the people)…
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
