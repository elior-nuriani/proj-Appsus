

export default {
    props: ['keep'],
    template: `
<div >
<h2>{{keep.id}}</h2>

</div>
`,
    created() {
        console.log(this.keep.id)
    }
}

