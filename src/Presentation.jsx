import {
  FlexBox,
  SpectacleLogo,
  FullScreen,
  AnimatedProgress,
  MarkdownSlide,
  Slide,
  Deck,
  Box,
  Notes,
  Text
} from 'spectacle';


const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <MarkdownSlide>
      {`
        # 0 - Course Introduction
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Who am I?

        - Assistant professor in the data science cluster
        - BS in CS - UOIT 2009
        - MS in CS - UToronto 2011
        - Failed startup
        - PhD in CS - UWaterloo 2018
        - [mmior@mail.rit.edu](mailto:mmior@mail.rit.edu)
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Topics

        - Relational databases
        - Querying and SQL
        - Database normalization
        - NoSQL
        - Data integration, cleaning, and mining
        - Distributed data processing
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Course

        - Lectures: slides and board
        - Regular quizzes
        - Team project (as an assignment)
        - Final exam
        - Everything on myCourses
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Quizzes

        - Roughly one per week (10  total)
        - Dates will be posted in the course calendar
        - You should review material to prepare
        - Quizzes are online and open book/notes (but no collaboration allowed)
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Exam

        - Final exam: date TBD
        - Cumulative
        - Closed book
        - I will not answer questions during exams
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Weights

        - 45% - Assignments
        - 10% - Quizzes
        - 20% - Final exam
        - 15% - Team project
        - 5% - Feedback
        - 5% - Final presentation
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Syllabus

        - Read it!
        - Syllabus quiz must be answered to access course content
        - Contains important guidelines and policies
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Regrading
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Major topic in CS
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Beckman Report
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # DB Education
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Vs of Big Data

        1. Volume - there is a lot of data
        2. Variety - data items look different
        3. Velocity - new data is arriving *fast*
        4. Veracity - is the data correct?
        5. Value - can we do anything with it?
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Jobs
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # What is a datbase?

        - Contains information about a particular enterprise
        - Collection of interrelated data
        - Set of programs to access that data
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Examples

        - Banking: accounts, transactions, etc
        - Airlines: reservations, schedules
        - Universities: registration (SIS), grades
        - …
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # History

        1. Files
        2. File systems
        3. Relational databases (SQL)
        4. NoSQL
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Files
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # File Systems
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Problems with files

        1. **Isolation**: Can many users use the DB?
        2. **Integrity**: Is the data valid?
        3. **Atomicity**: What if I fail while updating?

        (see section 1.2 of the textbook)
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Relational Databases
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # One Sizes Does Not Fit All
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # LinkedIn
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Facebook
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Google
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # Why not just learn NoSQL?
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # SQL is big business!
       `}
    </MarkdownSlide>
    <MarkdownSlide>
      {`
        # History

        - **1950s-1960s**: Large files on tapes
        - **1960s-1970s**: Hard disks,
                           Relational model
        - **1980s**: R
        - **1990s**: Decision support,
                     Parallel DBMS,
                     Growth of the WWW
        - **2000s**: XML/XQuery,
                     Open source systems,
                     “NoSQL”
       `}
    </MarkdownSlide>
  </Deck>
);

export default Presentation;
