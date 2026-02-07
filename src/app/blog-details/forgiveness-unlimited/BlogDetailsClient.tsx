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
                                Forgiveness Unlimited
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
                                            Dec 10, 2024
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <span className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white">
                                        Tribute
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <div className="mb-10 w-full overflow-hidden rounded-lg relative aspect-video">
                                    <Image
                                        src="/images/blog/Project-01.png"
                                        alt="Forgiveness Unlimited"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed space-y-6">
                                    <p>
                                        A quiet village near Konark, Odisha full of neighbourhood and green cover and there stands a palatial home with sprawling backyards, huge agricultural estate with ponds and live fishes.
                                    </p>
                                    <p>
                                        When you walk into the village from the highway, you are sort of forced by the divine power to stop by, a very old and calm temple and after taking the blessings from the goddess you move into the village where many eyes, some old and some young, greet with love & respect as they now know, someone from Babu’s home (In Odia the old land lords are known as Babu as a gesture to the elderly) has come to the village (Patelia).
                                    </p>
                                    <p>
                                        And then, the moment you are inside the house, after paying respect to the clan-deity, you are immediately offered with cool & sweet coconut water plucked from the same backyard. A loving member of the family awaits till you finish one & the next one is immediately pushed to your hands. And hell yeah, not just the water but the coconut meat is so so delicious as well. In no time, you understand that a special meal (we adore mutton & fish in Odisha 😄 ) was in the making & the best of meat had already been ordered.
                                    </p>
                                    <p>
                                        That’s the environment I was greeted with when the first time I had come here after my marriage. The state & temperament has not changed even after 17 years of the first encounter. That was my spouse’s maternal granny’s place.
                                    </p>
                                    <p>
                                        And in the same village, same serene & possibly better olden times, the first daughter of the Rath family was born and she was Jhunu, my Mother-In-Law. Soon the 2nd (Kuni) was welcome to the family & then the 3rd (Gita) one as well. The family was so happy to have all 3 daughters & that to in an era where daughters were no less than a burden. As obvious in a family someone among the kids had to be a strong headed one & the other, more caring & soft. In a typical family usually the tough stand is taken my the elder one & the softer by the 2nd born but here the role was reversed.
                                    </p>
                                    <p>
                                        While Kuni loved running around the fields & shops, Jhunu loved to be indoors & play with the toys.
                                        <br />
                                        While Kuni had more friends who were boys, Jhunu had none.
                                        <br />
                                        While the elder Rath Babu was carefree about Kuni hanging out, he was very careful about Jhunu. And in all these time in the loving shadow of two elder sisters, Gita was growing to be the most loved kid in the family.
                                    </p>
                                    <p>
                                        Love everyone, care for everyone, talk softly, respect elders are some of the traits the eldest one started to grow up with, as her core assets & values. Mama (from here onwards Jhunu will be known as Mama, as incase she ever reads it, will kill me for calling her by name 😀 ), soon completed her studies in Patella, graduated, got married & moved out to a new city Bhubaneswar along with my Father-in-Law to build her new abode. As luck would have it, she also had 3 daughters to have sweetened coincidence to her parents.
                                    </p>
                                    <p>
                                        Silent by nature but very assertive in her thought process is what one would describe Mama. The same positive mental strength & assertiveness only made her swim the ocean of life with ease. It was never easy raising the 3 daughters even in 70s & 80s and with a workaholic husband who was pictured mostly with his files rather than tea cups in his hands. But as they say “Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.” And she followed the mantra to the T. At the end she could proudly raise a doctor, engineer & architect, all under the same roof & that was the self pat-on-the-back for her always.
                                    </p>
                                    <p>
                                        Life only tests them who are tough, And unfortunately we can’t complain to be the chosen one for the same. First kid is always special in a family. So was the case here as well and when the desired field to excel was Medicine, it can’t get any tougher. While Dr Panda had her share of struggles, Mama was equally standing by her all the time throughout the formative years to build her career. Moving out from her home to help the eldest one and kept shuttling between 2 cities in 2 states was never easy and never ever if its for 9 long years. Kudos to both Mama & Bapa(Father-in-Law), they became the supporting pillar to the family without having furrowed brows. And when after long struggles but with deep perseverance her eldest one completed DNB with flying colours, she had a swollen chest & kept thumping it internally.
                                    </p>
                                    <p>
                                        Shifting gears now & going to flashback, In 2017 when they were visiting us in Pune, we got early signs of dementia for Bapa. In the subsequent years things started to go south and by 2018 unfortunately he had slipped into a full stage dementia. For a woman who adored her husband deeply and was completely dependent on him for all financial & social decisions, all of a sudden getting that additional responsibilities to manage that independently, while still taking care of her ailing spouse was a mammoth mountain to climb. She took it on the chin & started to gain control of all investments & financials day by day, month by month & when I saw her a year later with full control, I was jaw-dropped.
                                    </p>
                                    <p>
                                        My FIL being a senior town planner was used to be invited to all the top seminars including the national town planners conference & had travelled across India along with Mama. After the onset of Dementia & not keeping well, it was obvious to stay away from those invitations for last 6-7 years. But it was Mama’s grit that she went alone to attend the seminar last year(2023) to keep Bapa’s passion alive.
                                    </p>
                                    <p>
                                        While during covid times, we got chance to spend long quality time with them at home town while we were all working remotely, it was that period which made me to know about her in a more deeper way. And then when you see the daily chores she was doing for Bapa day in and day out without ever complaining and still bearing the same smile & positiveness in her face, it was very evident that this lady was an woman with mettle.
                                    </p>
                                    <p>
                                        During that period, there were times when a sense of discomfort (on a lighter note 😉) got into me when I used to see her tip toeing (literally) into the room to hand over the cup of coffee to me to avoid being in frame for my continuous video calls. Not that I didn’t like her coffee or the lovely motherly gesture, but we were never brought up being pampered, as have been independent from early childhood because of both working parents & the value system that was instilled, was not to be served like this while you keep warming the chair. But who can stay unmelted for long after a hand made earthy hot coffee..
                                    </p>
                                    <p>
                                        When someday you sit besides her & give a patient hearing to her life journey , one would realise what kind of struggles she had been through & what degree of patience she had to take all those into her stride & make it a way. There has been instances when sometimes relatives, sometimes maids at home & even we kids have spoken to her rudely or shown tantrums, but her undeterred mind always responded stating "Its OK, that person would have behaved that way because of some compulsion"
                                    </p>
                                    <p>
                                        In all these hardships, in all the social pressures in a typical Indian culture, and in all these adversities, some things were common,
                                        <br />
                                        to not complain,
                                        <br />
                                        to not crib out the difficult facets of life,
                                        <br />
                                        to not ignore everyday as a new day &
                                        <br />
                                        above all forgive & move on !!
                                    </p>
                                    <p>
                                        In her pursuit of happiness, She had already become a brand ambassador of “FORGIVENESS UNLIMITED”
                                    </p>
                                    <p className="font-bold">
                                        And That's BIJAYLAXMI DEBI for you all.
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
