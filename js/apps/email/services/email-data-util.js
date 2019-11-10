

var gNextId = 100;
export const data = _createMails()

function _createMails() {
    let mails = [
        _createMail(
            '@Sender',
            'Ex opt',
            'ipsum do eiusmod labore irure deserunt ea nulla aliqua et officia elit aliqua ad cillum reprehenderit occaecat reprehenderit cupidatat nisi quis dolor aliquip nostrud elit mollit nisi non qui ex incididunt nulla nulla ad voluptate ullamco duis laboris consectetur culpa mollit voluptate nostrud aute id voluptate magna proident dolor enim duis consectetur fugiat qui aliquip ea amet excepteur tempor deserunt pariatur proident esse laborum et commodo dolor nostrud consectetur consectetur sunt aute minim sunt occaecat duis eiusmod dolore labore eiusmod adipisicing elit do esse elit incididunt consectetur aute commodo commodo exercitation in ad aliquip in eu anim pariatur est anim',
            false,
            true,
            192944929),

        _createMail(
            '@Lojo jojo',
            'Vacitona',
            'irure do occaecat mollit magna quis proident Lorem do consequat eu labore fugiat Lorem minim esse cupidatat minim est duis esse nostrud cillum anim ullamco minim est adipisicing ea in ex incididunt sit adipisicing id sint aute proident nisi laboris duis incididunt nisi proident ut nulla aliqua nisi laborum proident amet nostrud magna ea consequat irure excepteur ullamco pariatur nostrud exercitation dolore laboris exercitation id commodo exercitation amet sit ut pariatur deserunt incididunt nisi magna occaecat deserunt incididunt est culpa sunt in qui fugiat ut irure deserunt nisi commodo fugiat ex commodo sint amet',
            true,
            false,
            99992032093),
        _createMail(
            'Lucky',
            'Job application',
            'amet quis sunt esse dolore incididunt sunt est sint velit non duis cupidatat laboris officia quis non sit consectetur irure officia quis minim fugiat ullamco tempor enim est fugiat aliqua irure quis ex amet labore esse id et ullamco ullamco exercitation elit ad in aliquip ut commodo in reprehenderit id elit fugiat ex aliquip quis ad Lorem enim sit in magna aute consequat exercitation anim sit magna eiusmod et cupidatat nulla adipisicing minim nostrud cupidatat Lorem laboris incididunt ea aliqua dolor voluptate excepteur anim minim aliquip cillum esse labore Lorem in velit voluptate amet laborum irure exercitation voluptate duis veniam',
            false,
            true,
            1113231113),
        _createMail(
            'Lucky',
            'Vuee Vuee',
            'amet quis sunt esse dolore incididunt sunt est sint velit non duis cupidatat laboris officia quis non sit consectetur irure officia quis minim fugiat ullamco tempor enim est fugiat aliqua irure quis ex amet labore esse id et ullamco ullamco exercitation elit ad in aliquip ut commodo in reprehenderit id elit fugiat ex aliquip quis ad Lorem enim sit in magna aute consequat exercitation anim sit magna eiusmod et cupidatat nulla adipisicing minim nostrud cupidatat Lorem laboris incididunt ea aliqua dolor voluptate excepteur anim minim aliquip cillum esse labore Lorem in velit voluptate amet laborum irure exercitation voluptate duis veniam',
            false,
            true,
            32832323),
        _createMail(
            '@Dunno',
            'Potato chips',
            ' elit ad in aliquip ut commodo in reprehenderit id elit fugiat ex aliquip quis ad Lorem enim sit in magna aute consequat exercitation anim sit magna eiusmod et cupidatat nulla adipisicing minim nostrud cupidatat Lorem laboris incididunt ea aliqua dolor voluptate excepteur anim minim aliquip cillum esse labore Lorem in velit voluptate amet laborum irure exercitation voluptate duis veniam dkkjldnsaj oop wawn ewa !!!!',
            false,
            false,
            232323),
        _createMail(
            '@Koko',
            'Lorem jsad',
            ' elit ad in aliquip ut commodo in reprehenderit id elit fugiat ex aliquip quis ad Lorem enim sit in magna aute consequat exercitation anim sit magna eiusmod et cupidatat nulla adipisicing minim nostrud job job water ldsad ',
            true,
            false,
            539429422),
        _createMail(
            '@Slap',
            'pdds soddosdso...',
            'nulla aliqua et officia elit aliqua ad cillum reprehenderit occaecat reprehenderit cupidatat nisi quis dolor aliquip nostrud elit mollit nisi non qui ex incididunt nulla nulla ad voluptate ullamco duis laboris consectetur culpa mollit voluptate nostrud aute id voluptate @........consectetur fugiat qui aliquip ea amet excepteur tempor deserunt pariatur proident esse laborum et commodo dolor nostrud consectetur consectetur sunt aute minim sunt occaecat duis eiusmod dolore labore eiusmod adipisicing elit do esse elit incididunt consectetur aute commodo commodo exercitation in ad aliquip in eu anim pariatur est anim',
            true,
            true,
            19000929)
    ]
    return mails;
}

function _createMail(name, subject, body, isRead, isMark, sentAt) {
    return {
        id: gNextId++,
        name,
        subject,
        body,
        isRead,
        isMark,
        sentAt
    }
}