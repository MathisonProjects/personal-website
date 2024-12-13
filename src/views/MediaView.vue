<template>
    <DefaultTemplate>
        <v-row>
            <v-col md="3" sm="12" xs="12">
                <v-list>
                    <v-list-item @click="view = 'all'" :class="{ 'v-list-item-selected': view === 'all' }">
                        <v-list-item-title>
                            All ({{ mediaCount.all }})
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="view = 'Forbes'" :class="{ 'v-list-item-selected': view === 'Forbes' }">
                        <v-list-item-title>
                            Forbes ({{ mediaCount.forbes }})
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="view = 'Rolling Stone'" :class="{ 'v-list-item-selected': view === 'Rolling Stone' }">
                        <v-list-item-title>
                            Rolling Stone ({{ mediaCount.rstone }})
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="view = 'Newsweek'" :class="{ 'v-list-item-selected': view === 'Newsweek' }">
                        <v-list-item-title>
                            Newsweek ({{ mediaCount.newsweek }})
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-col>
            <v-col md="9" sm="12" xs="12">
                <v-card>
                    <v-card-text>
                        <v-list>
                            <v-list-item v-for="item in mediaDisplay" :key="item.title" @click="openArticle(item.url)">
                                <v-list-item-content>
                                    <v-row>
                                        <v-col cols="2">
                                            <v-list-item-avatar>
                                                <v-img :src="item.image" alt="item.title" />
                                            </v-list-item-avatar>
                                        </v-col>
                                        <v-col>
                                            <v-list-item-title>
                                                {{ item.title }}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>
                                                {{ item.date }}

                                                <v-chip density="compact" :color="item.type === 'Forbes' ? 'red' : item.type === 'Rolling Stone' ? 'orange' : 'blue'" :text-color="item.type === 'Forbes' ? 'white' : item.type === 'Rolling Stone' ? 'white' : 'white'">
                                                    {{ item.type }}
                                                </v-chip>
                                            </v-list-item-subtitle>
                                            <v-list-item-text>
                                                {{ item.description }}
                                            </v-list-item-text>
                                        </v-col>
                                    </v-row>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </DefaultTemplate>
</template>

<script>
import DefaultTemplate from '@/components/DefaultTemplate.vue';
export default {
    name: 'MediaView',
    components: {
        DefaultTemplate
    },
    computed: {
        mediaDisplay() {
            return this.media
                .filter(item => this.view === 'all' ? true : item.type === this.view)
                .sort((a, b) => new Date(b.date) - new Date(a.date));
        },
        mediaCount() {
            return {
                forbes: this.media.filter(item => item.type === 'Forbes').length,
                rstone: this.media.filter(item => item.type === 'Rolling Stone').length,
                newsweek: this.media.filter(item => item.type === 'Newsweek').length,
                all: this.media.length
            }
        }
    },
    data() {
        return {
            view: 'all',
            media: [
                { type: 'Forbes', title: 'How Tech Companies Can Collaborate With Nonprofits For Social Impact', image: 'https://imageio.forbes.com/specials-images/imageserve/5fb5317182369497842a6ea4//960x0.jpg?format=jpg&width=1440', date: '2023-04-25', url: 'https://www.forbes.com/councils/forbestechcouncil/2023/04/25/how-tech-companies-can-collaborate-with-nonprofits-for-social-impact/', description: 'How can businesses build sustainable relationships with nonprofits or non-governmental organizations (NGOs) to take these relationships from a branding problem to a solution of true social involvement? ' },
                { type: 'Forbes', title: 'International Talent: Ripe Silicon Valley Conditions That Are Changing Remote Work', image: 'https://imageio.forbes.com/specials-images/imageserve/62e1b0800d6194e9c42ace2a/Young-woman-using-laptop-at-dawn-above-the-city--Barcelona--Spain/960x0.jpg?format=jpg&width=1440', date: '2023-03-14', url: 'https://www.forbes.com/councils/forbestechcouncil/2023/03/14/what-developers-can-learn-about-saas-from-no-code-platforms/', description: 'No-code is essentially about providing users of web or application services with the necessary tools to access customization with little to no coding knowledge, from dragging and dropping graphic elements to changing responsiveness or adding routes to an application.' },
                { type: 'Forbes', title: 'Obsolescence In Tech Is Jeopardizing Brand Loyalty', image: 'https://imageio.forbes.com/specials-images/imageserve/5f5a2978078b3ed1899abb0a/Professional-using-mobile-phone-at-office/960x0.jpg?format=jpg&width=1440', date: '2022-12-01', url: 'https://www.forbes.com/councils/forbestechcouncil/2022/12/12/hacker-houses-ripe-territory-for-proptech-in-silicon-valley/', description: 'Housing and technology have been related ever since humans have had to make spaces inhabitable, whether it was having to live in a cave with leaks in the ceiling or financing a skyscraper amid a housing crisis.' },
                { type: 'Forbes', title: 'Gamification In Scrum Is Changing The Game', image: 'https://imageio.forbes.com/specials-images/imageserve/634ff2341699476fd8d66395/Abstract-flowing-data-ramp-/0x0.jpg?format=jpg&crop=1788,1006,x0,y32,safe&width=1440', date: '2022-10-20', url: 'https://www.forbes.com/councils/forbestechcouncil/2022/10/20/gamification-in-scrum-is-changing-the-game/', description: 'To implement gamification in scrum correctly, in practice it should be about personal growth and not a meritocracy.' },
                { type: 'Forbes', title: 'Hacker Houses: Ripe Territory For Proptech In Silicon Valley?', image: 'https://imageio.forbes.com/specials-images/imageserve/624b04388007d20ca494b9e5/In-Technology-Research-Facility--Chief-Engineer-Stands-in-the-Middle-of-the-Lab-and/960x0.jpg?format=jpg&width=1440', date: '2022-08-29', url: 'https://www.forbes.com/councils/forbestechcouncil/2022/08/29/obsolescence-in-tech-is-jeopardizing-brand-loyalty/', description: 'Brand loyalty does not depend upon preconceived perceptions of the brand or product but upon actual customer satisfaction after the fact.' },
                { type: 'Forbes', title: 'What Developers Can Learn About SaaS From No-Code Platforms', image: 'https://imageio.forbes.com/specials-images/imageserve/640f2ed93c29eefc407aa26b//960x0.jpg?format=jpg&width=1440', date: '2022-07-28', url: 'https://www.forbes.com/councils/forbestechcouncil/2022/07/28/international-talent-ripe-silicon-valley-conditions-that-are-changing-remote-work/', description: 'It is partly thanks to international hiring that the tech industry is alive and well.' },
                { type: 'Rolling Stone', title: 'Reuse, Reduce, Recycle (Code): Leveraging Sustainable Software', image: 'https://www.rollingstone.com/wp-content/uploads/2023/06/reuse_reduce_recycle_code_leveraging_sustainable_software-.jpg?w=1581&h=1054&crop=1', date: '2023-06-09', url: 'https://www.rollingstone.com/culture-council/articles/reuse-reduce-recycle-leveraging-sustainable-software-1234766332/', description: 'with solid design principles, is reusable: but can it stand the test of technological time?' },
                { type: 'Rolling Stone', title: 'Bridging the Coding Skill-Capabilities Gap to Improve Employees’ Educational Experience', image: 'https://www.rollingstone.com/wp-content/uploads/2023/04/Bridging-the-Coding-Skill-Capabilities-Gap-to-Improve-Employees-Educational-Experience.jpg?w=1581&h=1054&crop=1', date: '2023-04-11', url: 'https://www.rollingstone.com/culture-council/articles/bridging-coding-skill-capabilities-gap-to-improve-employees-educational-experience-1234712493/', description: 'What can we do to bridge the skill-capabilities gap and improve our employees’ educational experience in our companies?' },
                { type: 'Rolling Stone', title: 'Quiet Firing: When Leaders Do The Bare Minimum', image: 'https://www.rollingstone.com/wp-content/uploads/2022/10/4f84db6c-a459-4b2d-b244-5348f54a5b53.jpg?w=1581&h=1054&crop=1', date: '2022-10-27', url: 'https://www.rollingstone.com/culture-council/articles/quiet-firing-when-leaders-do-bare-minimum-1234618664/', description: 'True acceptance of basic work dynamics — be it via quitting, hiring, firing and everything in between — is a must.' },
                { type: 'Rolling Stone', title: 'Is There Enough Diversity in ‘Women in Tech’ Initiatives?', image: 'https://www.rollingstone.com/wp-content/uploads/2022/09/Is-There-Enough-Diversity-in-Women-in-Tech-Initiatives.jpg?w=1581&h=1054&crop=1', date: '2022-09-15', url: 'https://www.rollingstone.com/culture-council/articles/is-there-enough-diversity-women-in-tech-initiatives-1234591967/', description: 'There’s still a significant challenge to tackle: including trans and nonbinary people in IT.' },
                { type: 'Newsweek', title: 'LGBT Business Inclusion Work', image: 'https://d.newsweek.com/en/full/2104226/business-people-working-together.webp?w=737&f=1aa72e59df5591df16f110a1500c8c7e', date: '2022-08-26', url: 'https://www.newsweek.com/lgbt-business-inclusion-work-1736992', description: 'Supporting LGBT employees from within businesses doesn\'t come down to friendliness or acceptance, but active involvement.' },
                { type: 'Newsweek', title: 'Servants: The New Old-School Leadership', image: 'https://d.newsweek.com/en/full/2139987/young-man-working-home.webp?w=737&f=07aa3a2f4199877364c4751c39766705', date: '2022-10-27', url: 'https://www.newsweek.com/servants-new-old-school-leadership-1754871', description: 'What could servant leadership look like today for remote tech teams and their leaders?' },
                { type: 'Newsweek', title: 'How People Use Social Media Platforms and What\'s at Stake With New Twitter Ownership', image: 'https://d.newsweek.com/en/full/2173120/smartphone.webp?w=737&f=22ccc8319389e91f746247ca291428be', date: '2023-01-04', url: 'https://www.newsweek.com/how-people-use-social-media-platforms-whats-stake-new-twitter-ownership-1770972', description: 'If Twitter is dying, some people are refusing to let it go'},
                { type: 'Newsweek', title: 'The Power Outage that Power Couldn\'t Deal With', image: 'https://d.newsweek.com/en/full/2228195/electric-power-substation.webp?w=737&f=70b41aeb34771bbefeae9cdd44de8cfa', date: '2023-04-28', url: 'https://www.newsweek.com/power-outage-that-power-couldnt-deal-1797146', description: 'What can policy learn from the lessons of business philosophy?'}
            ]
        }
    },
    methods: {
        openArticle(url) {
            window.open(url, '_blank');
        }
    }
}
</script>

<style scoped>
  .v-list-item-selected {
    background-color: #F0F0F0;
  }
</style>
