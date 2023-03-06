import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <nav>
      <div
        className={`md:flex md:justify-between w-full h-auto p-3  bg-yellow-300 hidden items-center `}
      >
        <div className="logo "> 
          <h1>logo</h1>
        </div>

        <ul className="flex justify-around w-1/2 text-lg font-semibold menu">
          <Link to={'/'}>
            <li className={` text-gray-900 `}>Home</li>
          </Link>
          <Link to={'/subject'}>
            <li className={` text-gray-900 `}>Subject</li>
          </Link>
          <Link to={'/chapter'}>
            <li className={` text-gray-900 `}>Chapter</li>
          </Link>
          <Link to={'/level'}>
            <li className={` text-gray-900 `}>level</li>
          </Link>
        </ul>
        <div className="">
          
        <ColorModeSwitcher justifySelf="flex-end" top ={"2"} />
        </div>
      </div>
      <div className="md:hidden">
        <ColorModeSwitcher top ={"4"}/>

        <Button
          onClick={onOpen}
          colorScheme={'yellow'}
          width="12"
          height={'12'}
          rounded="full"
          zIndex={'overlay'}
          position={'fixed'}
          top="6"
          left="6"
        >
          <RiMenu5Fill />
        </Button>

        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>
             Quiz App
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={'4'} alignItems="flex-start">
                <LinkButton onClose={onClose} url="/" title="Home" />
                <LinkButton
                  onClose={onClose}
                  url="/subject"
                  title="Subject"
                />
                <LinkButton
                  onClose={onClose}
                  url="/chapter"
                  title="Chapter"
                />
                <LinkButton
                  onClose={onClose}
                  url="/level"
                  title="Level"
                />
                {/* <LinkButton onClose={onClose} url="/about" title="About" /> */}
                <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%" 
                flexDirection={'column'}
              >
 
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} >
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>


                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>

                    </VStack>
                  </>

                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link onClick={onClose} to="/register">
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>

              </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Header;
