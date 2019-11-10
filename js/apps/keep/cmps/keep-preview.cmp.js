

export default {
    name: 'keep-preview',
    props: ['keep'],
    template: `
<li>
    <h2>{{keep.id}}</h2>
</li>
`,
    created() {
        // console.log(this.keep.id)
    }
}

