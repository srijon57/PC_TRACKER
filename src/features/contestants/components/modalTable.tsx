

import React from 'react';
import { Box, ButtonGroup, Divider, Heading, ModalFooter, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, Text, Td } from '@chakra-ui/react';


interface ModalContentExtendedProps {

    contestantName: string;
    contestantData: any;
}

const ModalContentExtended: React.FC<ModalContentExtendedProps> = ({ contestantName, contestantData }) => {
    const ModalTableHeads = ['Contest Name', 'Date', 'Rank', 'Team Name', 'Total Solved', 'Penalty']


    console.log("From the modal", contestantData);


    return (
        <>
            <Box padding={5} >
                <Heading as='h1' size='xl' noOfLines={1} mb={4}>
                    National Contest Profile of
                    <Text as={'span'} color={'blue.400'}>
                        {' ' + contestantName}
                    </Text>
                </Heading>
                <Divider />
                <TableContainer>
                    <Table size='lg' variant='simple'>
                        <TableCaption></TableCaption>
                        <Thead>
                            <Tr>
                                {ModalTableHeads.map((head, index) => (
                                    <Th key={index} textAlign='center'>{head}</Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                Array.from(contestantData).map((contest: any, index) => {
                                    
                                    let contestTitle = contest.contestTitle;
                                    let words = contestTitle.split(' ');
                                    let firstLine = '';
                                    let secondLine = '';
                                    let half = Math.ceil(words.length / 2);

                                    for (let i = 0; i < words.length; i++) {
                                        if (i < Math.max(half, 5)) {
                                            firstLine += words[i] + ' ';
                                        } else {
                                            secondLine += words[i] + ' ';
                                        }
                                    }

                                    
                                    let universityTeams = contest.universityTeams;
                                    let teamName = '';
                                    let rank = 0;
                                    let penalty = 0;
                                    let totalSolved = 0;
                                    let teamMembersF = [];

                                    universityTeams.forEach((team: any) => {
                                        let teamMembers = team.teamMembers;
                                        teamMembers.forEach((member: string) => {
                                            if (member === contestantName) {
                                                teamName = team.teamName;
                                                rank = team.rank;
                                                penalty = team.penalty;
                                                totalSolved = team.totalSolved;
                                                teamMembersF = teamMembers;
                                            }
                                        });
                                    });

                                    return (
                                        <Tr key={index}>
                                            <Td textAlign='center'>
                                                <>
                                                    {firstLine.trim()}
                                                    <br />
                                                    {secondLine.trim()}
                                                </>
                                            </Td>
                                            <Td textAlign='center'>{contest.contestDate}</Td>
                                            <Td textAlign='center'>{rank}</Td>
                                            <Td textAlign='center'>
                                                {teamName}
                                            </Td>
                                            <Td textAlign='center'>{totalSolved}</Td>
                                            <Td textAlign='center'>{penalty}</Td>
                                            
                                        </Tr>
                                    );
                                })
                            }

                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            <ModalFooter>
                <ButtonGroup>

                </ButtonGroup>
            </ModalFooter>
        </>

    );
};

export default ModalContentExtended;