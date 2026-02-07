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
                                The Flight that I Refuse to Forget
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
                                        Personal
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <div className="mb-10 w-full overflow-hidden rounded-lg relative aspect-video">
                                    <Image
                                        src="/images/blog/Project-02.jpg"
                                        alt="The Flight that I Refuse to Forget"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed space-y-6">
                                    <h3 className="text-2xl font-bold text-dark">The Saga of That Evening..</h3>

                                    <p>
                                        Tall, thin, always tucked in with cotton formal clothes, simple yet graceful, was the characteristic of that Man !!
                                    </p>
                                    <p>
                                        Aged 82 and suffering from Dementia for last 7 years with being bed-ridden since 2022, still he fought the battle very much inside himself and won every single day.
                                    </p>
                                    <p>
                                        But just that one day, 18th July, fate won that last fight just by an inch And that was enough to take him to a different world. That Man was my Father-in-Law, A Man known to have lived by his values, principles and discipline throughout his life. And boy !! what way he had instilled all these principles into 3 daughters he raised beautifully.
                                    </p>
                                    <p>
                                        While he had succumbed to the battle that day, little did we know that there was another catastrophe was waiting to be unfolded the same afternoon.
                                    </p>
                                    <p>
                                        A day before , knowing his health condition, my better-half and her elder sister who stayed at a 4 hour distance from our place, decided to immediately fly in to home town. But because of the operational logistical challenges, finally got the ticket for 18th afternoon. After couple of hours , some unknown force pushed me to also get my ticket in my inbox. Next day morning while my sister-in-law was on her way to Pune and we were getting ready, got the bad news from my uncle but with a task for not to reveal it to the daughters before we all are grouped together at the airport. And in no time next ticket also slowly creeped into my inbox which was for my son.
                                    </p>
                                    <p>
                                        A state of shock, stoic silence, tears kissing the cheeks and flowing down was the state when both sisters were broken the news at the airport, While at the same time at some corner of the mind thanking GOD for finally relieving him from so much of pain each and every single day.
                                    </p>
                                    <p>
                                        Boarded the flight, patiently waiting for it to take off with impatient thoughts of even to get into the cockpit and start flying it without any further delay. The horror story was starting to unfold. We were informed that there was a technical snag on the flight, and it was getting delayed and will only fly after getting due attention from the engineers.
                                    </p>
                                    <p>
                                        Seconds, added up to minutes and minutes to hours and finally, after two hours, the lightening struck !! We were asked to de-plane as the flight was not in a right condition to fly. And to our utter dismay, that was the last flight to Bhubaneswar that day. Then a series of begging, pleas started with the airline to help us out in any possible ways to reach home as everyone was waiting for our arrival for the last rites. With every time we were getting the answer back that the earliest possible arrival at Bhubaneswar via a connecting flight is only the next day morning.
                                    </p>
                                    <p>
                                        While running around the luggage zone of the airport for finding any possible alternative, every passing moment only pushed one thought : “Numerous flights I have taken so far in my life but not a single time any flight was delayed beyond a permissible limit, leave about being cancelled. Then WHY WHY WHY had GOD chosen this day where the right time departure and right time arrival was THE MOST important thing to all 4 of us “
                                    </p>
                                    <p>
                                        Soon the patient begging & pleading started to turn to more firm requests & the volcano erupted when came to know there was just another airline which though had a connecting flight but was reaching in Bhubaneswar around 11 PM same night but none was recommended to us as it was a different airline. Also as technology’s supreme intelligence was at play, it didn’t show us as an option when I was looking for an alternative flight in my phone, as the departure time was too near. Was not able to digest how mean sometimes we can be, just thinking about the profits & the benefits and completely ignore the urgency & human side of the equation. Finally with no options remaining got booked into a connecting flight which was reaching only the next day morning. With a very painful & upsetting episode, finally had to convey to family members to go ahead for the last rites without us. With an exasperated state, Air India I5-320 was etched in memory forever. A little more intent, a little more empathy & a little more efforts from the airline staff & we would have made to the last rites.
                                    </p>
                                    <p>
                                        This very well reminded me of the great lines : “Humanity Above All Else”
                                    </p>
                                    <p>
                                        Finally after hopping in Bangalore we reached Bhubaneswar the next morning and immediately felt the void in that room, in that home. With both the sisters holding onto their emotions till that point with even a never ending night at the Bangalore airport, it was time to let it flow. With the near & dear ones around, we bid adieu to him the final time.
                                    </p>
                                    <p className="font-semibold italic">
                                        May his soul always Rest in Peace !!
                                        <br />
                                        Love you Bapa !!
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
