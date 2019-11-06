
export default {
    props: ['mail'],
    template: `
        <li class="clean-list">
            {{mail.subject}}
        </li>
    `
}